// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState } from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { createAccountFormStyles } from './create-account-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceTooltip } from '../../buttons/tooltip/smartprice-tooltip';
import { BaseInput } from '../../inputs/base-input/base-input';
import { IFormData } from '../../api/smartprice-api';
import { DateMaskInput } from '../../inputs/mask-inputs/date-mask-input/date-mask-input';
import { isValidEmail } from '../../utils/validators/email.validator/email.validator';
import { getDateOfBirth } from '../../utils/parsers/date-parser';

export interface ISmartPriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  phoneNumber?: string;
  verificationCode?: string;
  deviceToken?: string;
  onCreateAccount?: (userInfo: IFormData) => void;
  verifyErrorMessage?: string;
}

export const CreateAccountForm: FunctionComponent<ISmartPriceModalProps> = ({
  viewStyle,
  phoneNumber,
  verificationCode,
  verifyErrorMessage,
  onCreateAccount,
}): React.ReactElement => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validDob, setValidDob] = useState<boolean>(false);

  const onNextPressed = () => {
    if (onCreateAccount) {
      onCreateAccount({
        firstName,
        lastName,
        email,
        phoneNumber: phoneNumber ?? '',
        verifyCode: verificationCode ?? '',
        dateOfBirth,
      });
    }
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
    const val = isValidEmail(value);
    setValidEmail(val);
  };

  const onDobChange = (value: string) => {
    setDateOfBirth(value);
    if (getDateOfBirth(value) !== null) {
      setValidDob(true);
    } else {
      setValidDob(false);
    }
  };

  const isButtonDisabled =
    firstName === '' || lastName === '' || !validEmail || !validDob;

  return (
    <View style={[createAccountFormStyles.containerViewStyle, viewStyle]}>
      <Text style={createAccountFormStyles.titleContainerStyle}>
        Create an account
      </Text>

      <Text style={createAccountFormStyles.paragraphMarginStyle}>
        Prescryptive will provide you a free digital prescription savings card
        that you can use for your medication.
      </Text>

      <SmartpriceTooltip />

      <View>
        <View style={createAccountFormStyles.formRowViewStyle}>
          <BaseInput
            placeholder='First name'
            containerStyle={createAccountFormStyles.twoColumnInputViewStyle}
            value={firstName}
            onChangeText={setFirstName}
          />
          <BaseInput
            placeholder='Last name'
            containerStyle={createAccountFormStyles.twoColumnInputViewStyle}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View>
          <BaseInput
            placeholder='Email address'
            value={email}
            onChangeText={onEmailChange}
          />
        </View>
        <View style={createAccountFormStyles.formRowViewStyle}>
          <DateMaskInput
            date={dateOfBirth}
            onDateChange={onDobChange}
            errorMessageStyle={createAccountFormStyles.twoColumnErrorViewStyle}
            viewStyle={createAccountFormStyles.twoColumnInputViewStyle}
          />
          <BaseInput
            isDisabled={true}
            value={phoneNumber}
            containerStyle={createAccountFormStyles.twoColumnInputViewStyle}
          />
        </View>
        <Text style={createAccountFormStyles.errorTextStyle}>
          {verifyErrorMessage}
        </Text>
      </View>

      <View style={createAccountFormStyles.biggerVerticalMarginStyle}>
        <SmartpriceButton
          label='Create account'
          onPress={onNextPressed}
          backgroundColor={PurpleScale.regular}
          color={GreyScale.white}
          isDisabled={isButtonDisabled}
        />
      </View>
    </View>
  );
};
