// Copyright 2020 Prescryptive Health, Inc.
import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { FontSize, FontWeight } from '../../utils/types/fonts';

export interface ISmartpriceTextButtonStyles {
  containerViewStyle: ViewStyle;
  labelTextStyle: TextStyle;
}

const containerViewStyle: ViewStyle = {
  backgroundColor: 'transparent',
  height: '23.017px',
  alignItems: 'center',
  justifyContent: 'center',
};

const labelTextStyle: TextStyle = {
  color: BlueScale.dark,
  fontSize: FontSize.default,
  fontWeight: FontWeight.semibold,
};

export const smartpriceTextButtonStyles: ISmartpriceTextButtonStyles = {
  containerViewStyle,
  labelTextStyle,
};
