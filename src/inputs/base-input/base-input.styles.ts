// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, Platform } from 'react-native';
import { BlueScale, GreyScale, RedScale } from '../../utils/types/colors';

export interface IBaseInputStyles {
  textStyle: TextStyle;
  focusTextStyle: TextStyle;
  blurTextStyle: TextStyle;
  errorTextStyle: TextStyle;
  errorMessageTextStyle: TextStyle;
}

const errorTextStyle: TextStyle = {
  borderColor: RedScale.light,
};

const errorMessageTextStyle: TextStyle = {
  fontSize: 16,
  color: RedScale.dark,
  marginTop: 6,
};

const textStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  height: 48,
  maxHeight: 48,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: 4,
  backgroundColor: GreyScale.light,
  borderWidth: 2,
  borderColor: GreyScale.light,
};

const focusTextStyle = {
  borderColor: BlueScale.regular,
  backgroundColor: Platform.OS !== 'web' ? GreyScale.medium : GreyScale.light,
};

const blurTextStyle = { borderColor: GreyScale.light, outlineWidth: 0 };

export const baseInputStyles: IBaseInputStyles = {
  textStyle,
  focusTextStyle,
  blurTextStyle,
  errorMessageTextStyle,
  errorTextStyle,
};
