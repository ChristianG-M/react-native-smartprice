// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { PurpleScale, GreyScale } from '../../utils/types/colors';
import { currentFont, FontSize, FontWeight } from '../../utils/types/fonts';
import { getReponsiveDimension } from '../../utils/types/sizing';
import { BorderRadius } from '../../utils/types/spacing';
import {
  smartpriceButtonStyles,
  ISmartpriceButtonStyles,
} from './smartprice-button.styles';

const containerViewStyle: ViewStyle = {
  backgroundColor: PurpleScale.regular,
  borderRadius: BorderRadius.container,
  height: getReponsiveDimension('5.9113vh'),
  alignItems: 'center',
  justifyContent: 'center',
};

const labelTextStyle: TextStyle = {
  color: GreyScale.white,
  fontSize: FontSize.default,
  fontWeight: FontWeight.semibold,
  fontFamily: currentFont()
};

describe('smartpriceButtonStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceButtonStyles: ISmartpriceButtonStyles = {
      containerViewStyle,
      labelTextStyle,
    };
    expect(smartpriceButtonStyles).toEqual(mockSmartpriceButtonStyles);
  });
});
