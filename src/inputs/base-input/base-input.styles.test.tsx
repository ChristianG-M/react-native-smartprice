// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, Platform } from 'react-native';
import { BlueScale, GreyScale, RedScale } from '../../utils/types/colors';
import { baseInputStyles } from './base-input.styles';

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
  paddingLeft: 12,
  borderRadius: 4,
  backgroundColor: GreyScale.light,
  borderWidth: 2,
  borderColor: GreyScale.light,
};

const focusTextStyle = {
  borderColor: BlueScale.regular,
  backgroundColor: Platform.OS !== 'web' ? GreyScale.medium : GreyScale.light,
};

const blurTextStyle = { borderColor: GreyScale.light };

const baseInputStylesMock: IBaseInputStyles = {
  textStyle,
  focusTextStyle,
  blurTextStyle,
  errorMessageTextStyle,
  errorTextStyle,
};

describe('baseInputStyles', () => {
  it('has expected default styles', () => {
    expect(baseInputStylesMock).toEqual(baseInputStyles);
  });
});
