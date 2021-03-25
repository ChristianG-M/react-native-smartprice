// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent } from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { cardFormStyles } from './card-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceCard } from '../../card/smartprice-card';
import { IMemberInformation } from '../../api/smartprice-api';

export interface ISmartPriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  memberInfo?: IMemberInformation;
  onContinue?: (memberInfo?: IMemberInformation) => void;
}

export const CardForm: FunctionComponent<ISmartPriceModalProps> = ({
  viewStyle,
  memberInfo,
  onContinue,
}): React.ReactElement => {
  const onNextPressed = () => {
    if (onContinue) {
      if (memberInfo) {
        onContinue(memberInfo);
      } else {
        onContinue();
      }
    }
  };

  const isButtonDisabled = false;

  return (
    <View style={viewStyle}>
      <Text style={cardFormStyles.titleContainerStyle}>
        You’re all set, here’s your card!
      </Text>

      <Text style={cardFormStyles.paragraphMarginStyle}>
        Use your SmartPRICE™ card and start saving today.
      </Text>
      <View style={cardFormStyles.cardMarginStyle}>
        <SmartpriceCard memberInfo={memberInfo} />
      </View>
      <View>
        <Text style={cardFormStyles.subtitleTextStyle}>
          Complete your purchase
        </Text>
        <Text style={cardFormStyles.messageTextStyle}>
          Use your SmartPRICE Saving card information to complete your purchase
          process.
        </Text>
      </View>

      <View style={cardFormStyles.buttonMarginStyle}>
        <SmartpriceButton
          label='Continue'
          onPress={onNextPressed}
          backgroundColor={PurpleScale.regular}
          color={GreyScale.white}
          isDisabled={isButtonDisabled}
        />
      </View>
    </View>
  );
};
