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
} from 'react-native';
import { smartpriceModalStyles } from './smartprice-modal.styles';
import { SmartpriceModalHeader } from '../header/smartprice-modal-header';
import { SmartpriceFooter } from '../footer/smartprice-footer';
import { PhoneForm } from '../forms/phone-form/phone-form';
import { VerifyIdentityForm } from '../forms/verify-identity-form/verify-identity-form';
import { CardForm } from '../forms/card-form/card-form';
import { CreateAccountForm } from '../forms/create-account-form/create-account-form';
import {
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
import { ISmartpriceUserData } from '../../index';

export interface ISmartpriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  isOpen: boolean;
  onMemberInfo?: (info: string) => void;
  onFinishFlow?: (memberInfo?: IMemberInformation) => void;
  userData?: ISmartpriceUserData;
  retrieveDeviceToken?: boolean;
}

export const SmartpriceModal: FunctionComponent<ISmartpriceModalProps> = ({
  viewStyle,
  onClose,
  isOpen,
  onFinishFlow,
  userData,
  retrieveDeviceToken,
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

  // const onCreateAccount = (userInfo: IFormData) => {
  //   setIsBusy(true);
  //   if (userInfo !== null && deviceToken !== '') {
  //     registerAppUser(userInfo, deviceToken)
  //       ?.then((response: IMemberInfoResponse) => {
  //         const memberInformation = response.data as IMemberInformation;
  //         if (memberInformation.memberId !== undefined) {
  //           setIsBusy(false);
  //           setMemberInfo({
  //             ...memberInformation,
  //             deviceToken: retrieveDeviceToken ? deviceToken : '',
  //           });
  //           setFlowStep(4);
  //         }
  //       })
  //       .catch((e: IApiResponseError) => {
  //         if (e.response.data.status === 'failure') {
  //           setIsBusy(false);
  //           setFlowStep(3);
  //           setVerifyErrorMessage(
  //             `We couldn't create your account, please try again later`
  //           );
  //         }
  //       });
  //   } else {
  //     setIsBusy(false);
  //     setVerifyErrorMessage('Please, fill all the fields');
  //   }
  // };

  // const onVerificationCodeRequest = (phoneNumber: string) => {
  //   setIsBusy(true);
  //   sendVerificationCodeRequest(phoneNumber)
  //     .then((_) => {
  //       setIsBusy(false);
  //       setFlowStep(2);
  //       setRegisterPhoneNumber(phoneNumber);
  //       setCurrentError('');
  //     })
  //     .catch((e: string) => {
  //       setIsBusy(false);
  //       setCurrentError(e);
  //     });
  // };

  // const onSendVerificationCode = (code: string) => {
  //   setIsBusy(true);
  //   if (registerPhoneNumber) {
  //     setVerificationCode(code);
  //     getDeviceToken(code, registerPhoneNumber)
  //       .then((response: IDeviceTokenResponse) => {
  //         if (response.status === 'success') {
  //           if (!response.data.deviceToken) {
  //             // Can we have a success but not deviceToken?
  //           } else {
  //             const token = response.data.deviceToken;
  //             setDeviceToken(token);
  //             isRegisteredUser(token)
  //               .then((r) => {
  //                 if (!r.data) {
  //                   setIsBusy(false);
  //                   setFlowStep(3);
  //                 } else {
  //                   getMemberInformation(token)
  //                     .then((info: IMemberInfoResponse) => {
  //                       const memberInformation = info.data as IMemberInformation;
  //                       if (memberInformation.memberId !== undefined) {
  //                         setMemberInfo({
  //                           ...memberInformation,
  //                           deviceToken: retrieveDeviceToken ? deviceToken : '',
  //                         });
  //                         setIsBusy(false);
  //                         setFlowStep(4);
  //                       }
  //                     })
  //                     .catch((e: IApiResponseError) => {
  //                       if (e.response.data.status === 'failure') {
  //                         setFlowStep(3);
  //                         setIsBusy(false);
  //                         setVerifyErrorMessage(`No information available`);
  //                       }
  //                     });
  //                 }
  //               })
  //               .catch((_) => {
  //                 setFlowStep(1);
  //                 setIsBusy(false);
  //                 setCurrentError(
  //                   'Something went wrong, please try again later'
  //                 );
  //               });
  //           }
  //         }
  //       })
  //       .catch((_: IApiResponseError) => {
  //         setFlowStep(1);
  //         setIsBusy(false);
  //         setCurrentError('Something went wrong, please try again later');
  //       });
  //   }
  // };

  // const onCheckDeviceToken = (token: string) => {
  //   isRegisteredUser(token)
  //     .then((r) => {
  //       if (!r.data) {
  //         setIsBusy(false);
  //         setFlowStep(3);
  //       } else {
  //         getMemberInformation(token)
  //           .then((info: IMemberInfoResponse) => {
  //             const memberInformation = info.data as IMemberInformation;
  //             if (memberInformation.memberId !== undefined) {
  //               setMemberInfo(memberInformation);
  //               setIsBusy(false);
  //               setFlowStep(4);
  //             }
  //           })
  //           .catch((e: IApiResponseError) => {
  //             if (e.response.data.status === 'failure') {
  //               setFlowStep(3);
  //               setIsBusy(false);
  //               setVerifyErrorMessage(
  //                 `No information available, please create account`
  //               );
  //             }
  //           });
  //       }
  //     })
  //     .catch((_) => {
  //       setFlowStep(1);
  //       setIsBusy(false);
  //       setCurrentError('User is not registered, please register');
  //     });
  // };

  // const SwitchForm = (formStep: number) => {
  //   if (formStep >= 1 || formStep <= 3) {
  //     switch (formStep) {
  //       case 1:
  //         return (
  //           <PhoneForm
  //             onVerificationCodeRequest={onVerificationCodeRequest}
  //             errorMessage={currentError}
  //             userNumber={registerPhoneNumber}
  //           />
  //         );
  //       case 2:
  //         return (
  //           <VerifyIdentityForm
  //             phoneNumber={registerPhoneNumber}
  //             onSendVerificationCode={onSendVerificationCode}
  //             resendRequestVerificationCode={onVerificationCodeRequest}
  //             errorMessage={currentError}
  //           />
  //         );
  //       case 3:
  //         return (
  //           <CreateAccountForm
  //             verificationCode={verificationCode}
  //             deviceToken={deviceToken}
  //             phoneNumber={registerPhoneNumber}
  //             onCreateAccount={onCreateAccount}
  //             verifyErrorMessage={verifyErrorMessage}
  //             prefilledData={userData}
  //           />
  //         );
  //       case 4:
  //         return (
  //           <CardForm
  //             memberInfo={memberInfo}
  //             onContinue={onContinueFlowDefined}
  //           />
  //         );
  //       default:
  //         return undefined;
  //     }
  //   } else {
  //     return undefined;
  //   }
  // };

  const onContinueFlowDefined = (memberInfo?: IMemberInformation) => {
    if (onFinishFlow) {
      onFinishFlow(memberInfo);
    } else {
      onCloseModal();
    }
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
      toValue: (7.3891 * deviceHeight) / 100,
      duration: 300,
      easing: Easing.exp,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: deviceHeight,
      duration: 400,
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
      marginTop: slideAnim,
    },
  ];

  const activityIndicatorStyle: ViewStyle = {
    ...smartpriceModalStyles.activityIndicatorViewStyle,
    display: isBusy ? 'flex' : 'none',
  };

  useEffect(() => {
    if (isOpen === true) {
      slideIn();
    }
  }, [isOpen]);

  // useEffect(() => {
  //   if (userData?.deviceToken && userData?.deviceToken !== '') {
  //     onCheckDeviceToken(deviceToken);
  //   }
  // }, []);

  return (
    <View style={viewStyle}>
      <Animated.View style={slideInAnimationStyle}>
        <SmartpriceModalHeader
          isBackButtonEnabled={backButton}
          onClose={onCloseModal}
          onBackButtonPressed={onBackButtonPressed}
          currentStep={flowStep}
        />
        <View style={smartpriceModalStyles.scrollContainerViewStyle}>
          {/* <View style={smartpriceModalStyles.formContainerViewStyle}>
            {SwitchForm(flowStep)}
          </View> */}
          <SmartpriceFooter />
        </View>
        <View style={activityIndicatorStyle}>
          <ActivityIndicator
            hidesWhenStopped={true}
            color={PurpleScale.dark}
            animating={isBusy}
            size='large'
          />
        </View>
      </Animated.View>
    </View>
  );
};
