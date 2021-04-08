// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  Linking,
  Platform,
  // TouchableOpacity,
} from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { phoneFormStyles } from './phone-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceTextButton } from '../../buttons/text-button/smartprice-text-button';
import { PhoneMaskInput } from '../../inputs/mask-inputs/phone-mask-input/phone-mask-input';
// import { Checkbox } from '../../inputs/checkbox/checkbox';

export interface ISmartPriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  onVerificationCodeRequest?: (phoneNumber: string) => void;
  errorMessage?: string;
  userNumber?: string;
}

export const PhoneForm: FunctionComponent<ISmartPriceModalProps> = ({
  viewStyle,
  onVerificationCodeRequest,
  errorMessage,
  userNumber,
}): React.ReactElement => {
  const [phoneNumber, setPhoneNumber] = useState<string>(userNumber ?? '');
  // const [isRequirementsChecked, setIsRequirementsChecked] = useState<boolean>(
  //   false
  // );

  const onNextPressed = () => {
    if (onVerificationCodeRequest) {
      onVerificationCodeRequest(phoneNumber);
    }
  };

  // const onChecked = (isChecked: boolean) => {
  //   return setIsRequirementsChecked(isChecked);
  // };

  // const onSmartPriceTermsAndConditions = () => {
  //   const url = 'https://prescryptive.com/savings-plan-terms/';
  //   if (Platform.OS == 'web') {
  //     window.open(url, '_blank');
  //   } else {
  //     Linking.openURL(url);
  //   }
  // };

  // const onPrescryptiveTermsAndConditions = () => {
  //   const url = 'https://prescryptive.com/terms-of-use/';
  //   if (Platform.OS == 'web') {
  //     window.open(url, '_blank');
  //   } else {
  //     Linking.openURL(url);
  //   }
  // };

  const learnAbout = () => {
    {
      const url = 'https://prescryptive.com/pbm-solution/';
      if (Platform.OS == 'web') {
        window.open(url, '_blank');
      } else {
        Linking.openURL(url);
      }
    }
  };

  const onPhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
  };

  const isButtonDisabled = phoneNumber.length < 10;

  // const isButtonDisabled =
  //   phoneNumber.length < 10 || isRequirementsChecked === false;

  // const requirementsLabel = (
  //   <Text style={phoneFormStyles.requirementsLabelTextStyle}>
  //     I have read and agree to:
  //     <TouchableOpacity onPress={onSmartPriceTermsAndConditions}>
  //       <Text style={phoneFormStyles.linkTextStyle}>
  //         SmartPrice Terms & Conditions
  //       </Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={onPrescryptiveTermsAndConditions}>
  //       <Text style={phoneFormStyles.linkTextStyle}>
  //         Prescryptive Terms & Conditions
  //       </Text>
  //     </TouchableOpacity>
  //   </Text>
  // );

  useEffect(() => {
    if (userNumber && userNumber === '') {
      setPhoneNumber(userNumber);
    }
  }, [userNumber]);

  return (
    <View style={viewStyle}>
      <Text style={phoneFormStyles.titleContainerStyle}>
        Save with SmartPRICE™
      </Text>

      <Text style={phoneFormStyles.paragraphMarginStyle}>
        Please enter your mobile phone number to get your free prescription
        savings card.
      </Text>

      <PhoneMaskInput
        phoneNumber={phoneNumber}
        onPhoneNumberChange={onPhoneNumberChange}
        errorMessage={errorMessage}
      />

      {/* <View style={phoneFormStyles.checkboxMarginStyle}>
        <Checkbox
          onChange={onChecked}
          label={requirementsLabel}
          checked={isRequirementsChecked}
        />
      </View> */}

      <View style={phoneFormStyles.buttonMarginStyle}>
        <SmartpriceButton
          label='Next'
          onPress={onNextPressed}
          backgroundColor={PurpleScale.regular}
          color={GreyScale.white}
          isDisabled={isButtonDisabled}
        />
      </View>

      <Text style={phoneFormStyles.paragraphMarginStyle}>
        We will send you a text message to verify your identity.
      </Text>

      <View style={phoneFormStyles.dividerTextStyle} />
      <View style={phoneFormStyles.textButtonViewStyle}> 
        <Text style={phoneFormStyles.poweredByText}>Powered by Prescryptive</Text>
        <SmartpriceTextButton
        onPress={learnAbout}
        label='Learn more.'
        textStyle={phoneFormStyles.textButtonTextStyle}
        />
      </View>
    </View>
  );
};
