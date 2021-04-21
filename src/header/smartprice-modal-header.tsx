// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SmartPriceIconButton } from '../buttons/icon-button/icon-button';
import { PrescryptiveBrand } from '../icons/prescryptive-brand/prescryptive-brand';
import { smartpriceModalHeaderStyles } from './smartprice-modal-header.styles';
import { CloseIcon } from '../icons/close-icon/close-icon';
import { ArrowIcon } from '../icons/arrow-icon/arrow-icon';
import { PurpleScale } from '../utils/types/colors';

export interface ISmartpriceModalProps {
  viewStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  onBackButtonPressed: () => void;
  isBackButtonEnabled?: boolean;
  currentStep?: number;
}

export const SmartpriceModalHeader: FunctionComponent<ISmartpriceModalProps> = ({
  onClose,
  onBackButtonPressed,
  isBackButtonEnabled,
  viewStyle,
  currentStep = 1
}) => {
  const backButton = isBackButtonEnabled ? (
    <View style={smartpriceModalHeaderStyles.leftIconContainerViewStyle}>
      <SmartPriceIconButton
        onPress={onBackButtonPressed}
        viewStyle={smartpriceModalHeaderStyles.iconViewStyle}
      >
        <ArrowIcon direction='left' color={PurpleScale.regular} />
      </SmartPriceIconButton>
    </View>
  ) : undefined;

  return (
    <View style={[smartpriceModalHeaderStyles.headerViewStyle, viewStyle]}>
      {backButton}
      {/* <View style={smartpriceModalHeaderStyles.brandContainerStyle}>
        <PrescryptiveBrand />
      </View> */}
      <View style={smartpriceModalHeaderStyles.rightIconContainerViewStyle}>
        <SmartPriceIconButton
          onPress={onClose}
          viewStyle={smartpriceModalHeaderStyles.iconViewStyle}
        >
          {/* <CloseIcon /> */}
        </SmartPriceIconButton>
      </View>
      {/* <ProgressBar step={currentStep} totalSteps={4} width={2} /> */}
    </View>
  );
};
