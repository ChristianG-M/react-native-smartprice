// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, Platform } from 'react-native';
import { GreyScale, RedScale, BlueScale } from '@phx/core/src/theming/colors';
import { baseInputStyles, IBaseInputStyles } from './base-input.styles';
import { Paragraphs, SingleLines } from '@phx/core/src/theming/font-ramp';
import { Margins } from '@phx/core/src/theming/spacing';

const errorTextStyle: TextStyle = {
  borderColor: RedScale.light,
};

const errorMessageTextStyle: TextStyle = {
  ...Paragraphs.p2,
  color: RedScale.dark,
  marginTop: Margins.smallest,
};

const textStyle: TextStyle = {
  ...SingleLines.p1,
  height: 48,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: 4,
  backgroundColor: GreyScale.light,
  borderWidth: 2,
  borderColor: GreyScale.light,
};

const darkTextStyle: TextStyle = {
  ...textStyle,
  backgroundColor: GreyScale.black,
  color: GreyScale.white,
};

const focusTextStyle = {
  borderColor: BlueScale.regular,
  outlineWidth: 0,
  backgroundColor: Platform.OS !== 'web' ? GreyScale.medium : GreyScale.light,
};

const blurTextStyle = { borderColor: GreyScale.light, outlineWidth: 0 };

const defaultStyleSheet: IBaseInputStyles = {
  textStyle,
  focusTextStyle,
  blurTextStyle,
  errorMessageTextStyle,
  errorTextStyle,
};

const darkStyleSheet: IBaseInputStyles = {
  textStyle: darkTextStyle,
  focusTextStyle,
  blurTextStyle,
  errorMessageTextStyle,
  errorTextStyle,
};

describe('baseInputStyles', () => {
  it('has expected default styles', () => {
    expect(baseInputStyles.default).toEqual(defaultStyleSheet);
  });

  it('has a dark theme', () => {
    expect(baseInputStyles.themes?.get('dark')).toEqual(darkStyleSheet);
  });
});
