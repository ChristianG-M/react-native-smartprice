// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, ReactElement } from 'react';
import { View, StyleProp, ViewStyle, Linking, Platform } from 'react-native';
import { smartpriceFooterStyles } from './smartprice-footer.styles';
import { SmartpriceTextButton } from '../buttons/text-button/smartprice-text-button';

export interface ISmartpriceFooterProps {
  viewStyle?: StyleProp<ViewStyle>;
}

export const SmartpriceFooter: FunctionComponent<ISmartpriceFooterProps> = (): ReactElement => {
  const onFAQPressed = () => {
    const url = 'https://enroll.myrx.io/faq';
    if (Platform.OS == 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  };
  const onPrivacyPressed = () => {
    const url = 'https://prescryptive.com/privacy-policy/';
    if (Platform.OS == 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <View style={smartpriceFooterStyles.footerViewStyle}>
      <SmartpriceTextButton
        onPress={onFAQPressed}
        label='Prescryptive FAQ'
        textStyle={smartpriceFooterStyles.mediumLinkTextStyle}
      />
      <SmartpriceTextButton
        onPress={onPrivacyPressed}
        label='Privacy Policy'
        textStyle={smartpriceFooterStyles.mediumLinkTextStyle}
      />
    </View>
  );
};
