// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Animated,
  Dimensions,
  Easing,
  Platform,
  ActivityIndicator,
  Modal,
  Keyboard,
  ScrollView,
} from 'react-native';
import { smartpriceModalStyles } from './smartprice-modal.styles';
import { SmartpriceModalHeader } from '../header/smartprice-modal-header';
import { SmartpriceFooter } from '../footer/smartprice-footer';
import { PhoneForm } from '../forms/phone-form/phone-form';
import { VerifyIdentityForm } from '../forms/verify-identity-form/verify-identity-form';
import { CardForm } from '../forms/card-form/card-form';
import { CreateAccountForm } from '../forms/create-account-form/create-account-form';
import {
  BuildTarget,
  getDeviceToken,
  getMemberInformation,
  IApiResponseError,
  IDeviceTokenResponse,
  IFormData,
  IMemberInfoResponse,
  IMemberInformation,
  isRegisteredUser,
  registerAppUser,
  sendVerificationCodeRequest,
} from '../api/smartprice-api';
import { PurpleScale } from '../utils/types/colors';
import { ISmartpriceUserData } from '../index';
import { getReponsiveDimension } from '../utils/types/sizing';

export interface ISmartpriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  isOpen: boolean;
  onMemberInfo?: (info: string) => void;
  onFinishFlow?: (memberInfo?: IMemberInformation) => void;
  userData?: ISmartpriceUserData;
  retrieveDeviceToken?: boolean;
  buildTarget?: BuildTarget;
  source?: string;
}

export const SmartpriceModal: FunctionComponent<ISmartpriceModalProps> = ({
  viewStyle,
  onClose,
  isOpen,
  onFinishFlow,
  userData,
  retrieveDeviceToken,
  buildTarget,
  source
}): React.ReactElement => {
  const deviceHeight = Dimensions.get('screen').height;

  const prefilledPhoneNumber = () => {
    const number = userData?.phoneNumber ?? '';
    if (number.length < 10) {
      return '';
    } else {
      return number;
    }
  };

  const [flowStep, setFlowStep] = useState<number>(1);
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState<string>(
    prefilledPhoneNumber()
  );
  const [memberInfo, setMemberInfo] = useState<IMemberInformation>();
  const [deviceToken, setDeviceToken] = useState<string>(
    userData?.deviceToken ?? ''
  );
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [verifyErrorMessage, setVerifyErrorMessage] = useState<string>('');
  const [currentError, setCurrentError] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const onCreateAccount = (userInfo: IFormData) => {
    setIsBusy(true);
    if (userInfo !== null && deviceToken !== '') {
      registerAppUser(userInfo, deviceToken, buildTarget, source)
        ?.then((response: IMemberInfoResponse) => {
          const memberInformation = response.data as IMemberInformation;
          if (memberInformation.memberId !== undefined) {
            setIsBusy(false);
            setMemberInfo({
              ...memberInformation,
              deviceToken: retrieveDeviceToken ? deviceToken : '',
            });
            setFlowStep(4);
          }
        })
        .catch((e: IApiResponseError) => {
          if (e.response.data.status === 'failure') {
            setIsBusy(false);
            setFlowStep(3);
            setVerifyErrorMessage(
              `We couldn't create your account, please try again later`
            );
          }
        });
    } else {
      setIsBusy(false);
      setVerifyErrorMessage('Please, fill all the fields');
    }
  };

  const onVerificationCodeRequest = (phoneNumber: string) => {
    setIsBusy(true);
    sendVerificationCodeRequest(phoneNumber, buildTarget)
      .then((_) => {
        setIsBusy(false);
        setFlowStep(2);
        setRegisterPhoneNumber(phoneNumber);
        setCurrentError('');
      })
      .catch((e: string) => {
        setIsBusy(false);
        setCurrentError(e);
      });
  };

  const onSendVerificationCode = (code: string) => {
    setIsBusy(true);
    if (registerPhoneNumber) {
      setVerificationCode(code);
      getDeviceToken(code, registerPhoneNumber, buildTarget)
        .then((response: IDeviceTokenResponse) => {
          if (response.status === 'success') {
            if (!response.data.deviceToken) {
              // Can we have a success but not deviceToken?
            } else {
              const token = response.data.deviceToken;
              setDeviceToken(token);
              isRegisteredUser(token, buildTarget)
                .then((r) => {
                  if (!r.data) {
                    setIsBusy(false);
                    setFlowStep(3);
                  } else {
                    getMemberInformation(token, buildTarget)
                      .then((info: IMemberInfoResponse) => {
                        const memberInformation = info.data as IMemberInformation;
                        if (memberInformation.memberId !== undefined) {
                          setMemberInfo({
                            ...memberInformation,
                            deviceToken: retrieveDeviceToken ? deviceToken : '',
                          });
                          setIsBusy(false);
                          setFlowStep(4);
                        }
                      })
                      .catch((e: IApiResponseError) => {
                        if (e.response.data.status === 'failure') {
                          setFlowStep(3);
                          setIsBusy(false);
                          setVerifyErrorMessage(`No information available`);
                        }
                      });
                  }
                })
                .catch((_) => {
                  setFlowStep(1);
                  setIsBusy(false);
                  setCurrentError(
                    'Something went wrong, please try again later'
                  );
                });
            }
          }
        })
        .catch((_: IApiResponseError) => {
          setFlowStep(1);
          setIsBusy(false);
          setCurrentError('Something went wrong, please try again later');
        });
    }
  };

  const onCheckDeviceToken = (token: string) => {
    isRegisteredUser(token, buildTarget)
      .then((r) => {
        if (!r.data) {
          setIsBusy(false);
          setFlowStep(3);
        } else {
          getMemberInformation(token, buildTarget)
            .then((info: IMemberInfoResponse) => {
              const memberInformation = info.data as IMemberInformation;
              if (memberInformation.memberId !== undefined) {
                setMemberInfo(memberInformation);
                setIsBusy(false);
                setFlowStep(4);
              }
            })
            .catch((e: IApiResponseError) => {
              if (e.response.data.status === 'failure') {
                setFlowStep(3);
                setIsBusy(false);
                setVerifyErrorMessage(
                  `No information available, please create account`
                );
              }
            });
        }
      })
      .catch((_) => {
        setFlowStep(1);
        setIsBusy(false);
        setCurrentError('User is not registered, please register');
      });
  };

  const switchForm = (formStep: number) => {
    if (formStep >= 1 || formStep <= 3) {
      switch (formStep) {
        case 1:
          return (
            <PhoneForm
              onVerificationCodeRequest={onVerificationCodeRequest}
              errorMessage={currentError}
              userNumber={registerPhoneNumber}
              viewStyle={{minHeight: getReponsiveDimension('60vh')}}
            />
          );
        case 2:
          return (
            <VerifyIdentityForm
              phoneNumber={registerPhoneNumber}
              onSendVerificationCode={onSendVerificationCode}
              resendRequestVerificationCode={onVerificationCodeRequest}
              errorMessage={currentError}
              viewStyle={{minHeight: getReponsiveDimension('57vh')}}
            />
          );
        case 3:
          return (
            <CreateAccountForm
              verificationCode={verificationCode}
              deviceToken={deviceToken}
              phoneNumber={registerPhoneNumber}
              onCreateAccount={onCreateAccount}
              verifyErrorMessage={verifyErrorMessage}
              prefilledData={userData}
              viewStyle={{minHeight: getReponsiveDimension('55vh')}}
            />
          );
        case 4:
          return (
            <CardForm
              memberInfo={memberInfo}
              onContinue={onContinueFlowDefined}
              viewStyle={{minHeight: getReponsiveDimension('57vh')}}
            />
          );
        default:
          return undefined;
      }
    } else {
      return undefined;
    }
  };

  const onContinueFlowDefined = (memberInfo?: IMemberInformation) => {
    if (onFinishFlow) {
      onFinishFlow(memberInfo);
    }
    onCloseModal();
  };

  const backButton = flowStep > 1 && flowStep < 4;

  const onCloseModal = () => {
    slideOut();
    setRegisterPhoneNumber('');
    setCurrentError('');
    setFlowStep(1);
  };

  const onBackButtonPressed = () =>
    flowStep > 1 ? setFlowStep(flowStep - 1) : setFlowStep(1);

  const slideAnim = useRef(new Animated.Value(deviceHeight)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      easing: Easing.exp,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: deviceHeight,
      duration: 600,
      easing: Easing.exp,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start((anim) => {
      if (anim.finished) {
        setTimeout(onClose, 100);
      }
    });
  };

  const slideInAnimationStyle = [
    smartpriceModalStyles.containerViewStyle,
    {
      transform: [{ translateY: slideAnim }],
      marginTop: Platform.OS === 'ios' ? 40 : 25
    },
  ];

  const activityIndicatorStyle = () => {
    if (Platform.OS === 'android') {
      return isBusy
        ? smartpriceModalStyles.activityIndicatorStyleAndroidBusy
        : smartpriceModalStyles.activityIndicatorStyleAndroid;
    } else {
      return isBusy
        ? smartpriceModalStyles.activityIndicatorViewStyleBusy
        : smartpriceModalStyles.activityIndicatorViewStyle;
    }
  };

  useEffect(() => {
    if (isOpen === true) {
      slideIn();
    }
  }, [isOpen]);

  useEffect(() => {
    if (userData?.deviceToken && userData?.deviceToken !== '') {
      onCheckDeviceToken(deviceToken);
    }
  }, []);

  const modalViewStyle = Platform.OS === 'web' ? [viewStyle, {borderWidth:0,borderColor:'none'}] : {borderWidth:0,borderColor:'none'};
 
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
 
  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       () => {
         setKeyboardVisible(true);
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false);
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

   const onKeyboardMargin = () => {
    let pageMargin = 0;
    switch (flowStep){
      case 1: 
        pageMargin = -100;
        break;
      case 2:
        pageMargin = -90;
        break;
      case 3: 
        pageMargin = -150;
      break;
      default: pageMargin = 0;
      break;
    }
    return isKeyboardVisible ? {marginTop: pageMargin } : undefined
   }  

  const isScrollEnabled = flowStep === 3 ? true : false;

  return (
    <Modal visible={isOpen} transparent={true} style={modalViewStyle}>
      <Animated.View style={[slideInAnimationStyle, onKeyboardMargin()]}>
        <SmartpriceModalHeader
          isBackButtonEnabled={backButton}
          onClose={onCloseModal}
          onBackButtonPressed={onBackButtonPressed}
          currentStep={flowStep}
        />
        <ScrollView 
          keyboardShouldPersistTaps='always' 
          keyboardDismissMode='none' 
          style={{flex: 1}} 
          scrollEnabled={isScrollEnabled} 
          contentContainerStyle={smartpriceModalStyles.scrollContainerViewStyle}>
          <View style={smartpriceModalStyles.formContainerViewStyle}>
            {switchForm(flowStep)}
          </View>
          <SmartpriceFooter />
        </ScrollView>
        <View style={activityIndicatorStyle()}>
          <ActivityIndicator
            hidesWhenStopped={true}
            color={PurpleScale.dark}
            animating={isBusy}
            size='large'
          />
        </View>
      </Animated.View>
    </Modal>
  );
};
