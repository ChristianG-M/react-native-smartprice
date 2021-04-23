// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState } from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { createAccountFormStyles } from './create-account-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceTooltip } from '../../buttons/tooltip/smartprice-tooltip';
import { BaseInput } from '../../inputs/base-input/base-input';
import { IFormData } from '../../api/smartprice-api';
import { DateMaskInput } from '../../inputs/mask-inputs/date-mask-input/date-mask-input';
import { isValidEmail } from '../../utils/validators/email.validator/email.validator';
import { getDateOfBirth } from '../../utils/parsers/date-parser';
import { ISmartpriceUserData } from '../../../index';
import { Checkbox } from '../../inputs/checkbox/checkbox';

export interface ISmartPriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  phoneNumber?: string;
  verificationCode?: string;
  deviceToken?: string;
  onCreateAccount?: (userInfo: IFormData) => void;
  verifyErrorMessage?: string;
  prefilledData?: ISmartpriceUserData;
}

export const CreateAccountForm: FunctionComponent<ISmartPriceModalProps> = ({
  viewStyle,
  phoneNumber,
  verificationCode,
  verifyErrorMessage,
  onCreateAccount,
  prefilledData,
}): React.ReactElement => {
  const prefilledEmail = () => {
    const email = prefilledData?.email;
    if (!email) {
      return { valid: false, email: '' };
    }
    return {
      valid: isValidEmail(email) ?? false,
      email: isValidEmail(email) ? email : '',
    };
  };

  const [firstName, setFirstName] = useState<string>(
    prefilledData?.firstName ?? ''
  );
  const [lastName, setLastName] = useState<string>(
    prefilledData?.lastName ?? ''
  );
  const [email, setEmail] = useState<string>(prefilledEmail().email);
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    prefilledData?.dateOfBirth?.toLocaleDateString() ?? ''
  );
  const [validEmail, setValidEmail] = useState<boolean>(prefilledEmail().valid);
  const [validDob, setValidDob] = useState<boolean>(
    getDateOfBirth(prefilledData?.dateOfBirth?.toLocaleDateString() as string)
      ? true
      : false
  );

  const [isRequirementsChecked, setIsRequirementsChecked] = useState<boolean>(
    false
  );

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

  // const isButtonDisabled =
  //   firstName === '' || lastName === '' || !validEmail || !validDob;

  const isButtonDisabled =
    firstName === '' ||
    lastName === '' ||
    !validEmail ||
    !validDob ||
    isRequirementsChecked === false;

  const onChecked = (isChecked: boolean) => {
    return setIsRequirementsChecked(isChecked);
  };

  const onSmartPriceTermsAndConditions = () => {
    const url = 'https://prescryptive.com/savings-plan-terms/';
    if (Platform.OS == 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  };

  const onPrescryptiveTermsAndConditions = () => {
    const url = 'https://prescryptive.com/terms-of-use/';
    if (Platform.OS == 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  };

  const requirementsLabel = (
    <Text style={createAccountFormStyles.requirementsLabelTextStyle}>
      I have read and agree to:
      <TouchableOpacity onPress={onSmartPriceTermsAndConditions}>
        <Text style={createAccountFormStyles.linkTextStyle}>
          SmartPrice Terms & Conditions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPrescryptiveTermsAndConditions}>
        <Text style={createAccountFormStyles.linkTextStyle}>
          Prescryptive Terms & Conditions
        </Text>
      </TouchableOpacity>
    </Text>
  );

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
        <View style={{ maxHeight: 48 }}>
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
        <View style={createAccountFormStyles.checkboxMarginStyle}>
          <Checkbox
            onChange={onChecked}
            label={requirementsLabel}
            checked={isRequirementsChecked}
          />
        </View>
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
