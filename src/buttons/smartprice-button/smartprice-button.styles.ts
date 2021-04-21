// Copyright 2020 Prescryptive Health, Inc.
import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { FontWeight, FontSize } from '../../utils/types/fonts';
import { BorderRadius } from '../../utils/types/spacing';

export interface ISmartpriceButtonStyles {
  containerViewStyle: ViewStyle;
  labelTextStyle: TextStyle;
}

const containerViewStyle: ViewStyle = {
  backgroundColor: PurpleScale.regular,
  borderRadius: BorderRadius.container,
  height: '26.305px',
  alignItems: 'center',
  justifyContent: 'center',
};

const labelTextStyle: TextStyle = {
  color: GreyScale.white,
  fontSize: FontSize.default,
  fontWeight: FontWeight.semibold,
};

export const smartpriceButtonStyles: ISmartpriceButtonStyles = {
  containerViewStyle,
  labelTextStyle,
};
