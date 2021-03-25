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
import '@expo/match-media';
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

export interface ISmartpriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  isOpen: boolean;
  onMemberInfo?: (info: string) => void;
  onContinueFlow?: () => void;
}

export const SmartpriceModal: FunctionComponent<ISmartpriceModalProps> = ({
  viewStyle,
  onClose,
  isOpen,
  onContinueFlow,
}): React.ReactElement => {
  const deviceHeight = Dimensions.get('screen').height;

  const [flowStep, setFlowStep] = useState<number>(1);
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState<string>('');
  const [memberInfo, setMemberInfo] = useState<IMemberInformation>();
  const [deviceToken, setDeviceToken] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [verifyErrorMessage, setVerifyErrorMessage] = useState<string>('');
  const [currentError, setCurrentError] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const onCreateAccount = (userInfo: IFormData) => {
    setIsBusy(true);
    if (userInfo !== null && deviceToken !== '') {
      registerAppUser(userInfo, deviceToken)
        ?.then((response: IMemberInfoResponse) => {
          const memberInformation = response.data as IMemberInformation;
          if (memberInformation.memberId !== undefined) {
            setIsBusy(false);
            setMemberInfo(memberInformation);
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
    sendVerificationCodeRequest(phoneNumber)
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
      getDeviceToken(code, registerPhoneNumber)
        .then((response: IDeviceTokenResponse) => {
          if (response.status === 'success') {
            if (!response.data.deviceToken) {
              // Can we have a success but not deviceToken?
            } else {
              const token = response.data.deviceToken;
              setDeviceToken(token);
              isRegisteredUser(token)
                .then((r) => {
                  if (!r.data) {
                    setIsBusy(false);
                    setFlowStep(3);
                  } else {
                    getMemberInformation(token)
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

  const switchForm = (formStep: number) => {
    if (formStep >= 1 || formStep <= 3) {
      switch (formStep) {
        case 1:
          return (
            <PhoneForm
              onVerificationCodeRequest={onVerificationCodeRequest}
              errorMessage={currentError}
              userNumber={registerPhoneNumber}
            />
          );
        case 2:
          return (
            <VerifyIdentityForm
              phoneNumber={registerPhoneNumber}
              onSendVerificationCode={onSendVerificationCode}
              resendRequestVerificationCode={onVerificationCodeRequest}
              errorMessage={currentError}
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
            />
          );
        case 4:
          return (
            <CardForm
              memberInfo={memberInfo}
              onContinue={onContinueFlowDefined}
            />
          );
      }
    }
  };

  const onContinueFlowDefined = () => {
    if (onContinueFlow) {
      onContinueFlow();
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

  return (
    <View style={viewStyle}>
      <Animated.View style={slideInAnimationStyle}>
        <SmartpriceModalHeader
          isBackButtonEnabled={backButton}
          onClose={onCloseModal}
          onBackButtonPressed={onBackButtonPressed}
        />
        <View style={smartpriceModalStyles.scrollContainerViewStyle}>
          <View style={smartpriceModalStyles.formContainerViewStyle}>
            {switchForm(flowStep)}
          </View>
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