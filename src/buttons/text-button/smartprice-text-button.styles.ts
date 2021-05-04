// Copyright 2020 Prescryptive Health, Inc.
import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { FontSize, FontWeight } from '../../utils/types/fonts';
import { getReponsiveDimension } from '../../utils/types/sizing';

export interface ISmartpriceTextButtonStyles {
  containerViewStyle: ViewStyle;
  labelTextStyle: TextStyle;
}

const containerViewStyle: ViewStyle = {
  backgroundColor: 'transparent',
  height: getReponsiveDimension('5.1724vh'),
  alignItems: 'center',
  justifyContent: 'center',
};

const labelTextStyle: TextStyle = {
  color: BlueScale.dark,
  fontSize: FontSize.default,
  fontWeight: FontWeight.semibold,
  fontFamily: 'Roboto'
};

export const smartpriceTextButtonStyles: ISmartpriceTextButtonStyles = {
  containerViewStyle,
  labelTextStyle,
};
