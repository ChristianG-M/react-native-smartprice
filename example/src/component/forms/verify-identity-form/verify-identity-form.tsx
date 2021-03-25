// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState } from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { verifyIdentityFormStyles } from './verify-identity-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceTextButton } from '../../buttons/text-button/smartprice-text-button';
import { BaseInput } from '../../inputs/base-input/base-input';

export interface IVerifyIdentityFormProps {
  viewStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
  phoneNumber: string;
  onSendVerificationCode?: (code: string) => void;
  resendRequestVerificationCode?: (phoneNumber: string) => void;
}

export const VerifyIdentityForm: FunctionComponent<IVerifyIdentityFormProps> = ({
  viewStyle,
  errorMessage,
  phoneNumber,
  onSendVerificationCode,
  resendRequestVerificationCode,
}): React.ReactElement => {
  const [verificationCode, setVerificationCode] = useState<string>('');

  const onNextPressed = () => {
    if (onSendVerificationCode) {
      onSendVerificationCode(verificationCode);
    }
  };

  const resendCode = () => {
    if (resendRequestVerificationCode) {
      resendRequestVerificationCode(phoneNumber);
    }
  };

  const isButtonDisabled = verificationCode.length < 6;

  return (
    <View style={viewStyle}>
      <Text style={verifyIdentityFormStyles.titleContainerStyle}>
        Verify identity
      </Text>

      <Text style={verifyIdentityFormStyles.paragraphMarginStyle}>
        Please enter the code sent to your mobile phone.
      </Text>

      <BaseInput
        maxLength={6}
        value={verificationCode}
        onChangeText={setVerificationCode}
        errorMessage={errorMessage}
      />

      <View style={verifyIdentityFormStyles.buttonMarginStyle}>
        <SmartpriceButton
          label='Next'
          onPress={onNextPressed}
          backgroundColor={PurpleScale.regular}
          color={GreyScale.white}
          isDisabled={isButtonDisabled}
        />
      </View>

      <View>
        <Text style={verifyIdentityFormStyles.receiveCodeTextStyle}>
          Didn’t receive your code?
          <Text style={verifyIdentityFormStyles.textButtonViewStyle}>
            <SmartpriceTextButton label='Resend code' onPress={resendCode} />
          </Text>
        </Text>
      </View>
    </View>
  );
};
