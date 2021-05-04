// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { currentFont, FontSize, FontWeight } from '../../utils/types/fonts';
import { getReponsiveDimension } from '../../utils/types/sizing';
import {
  smartpriceTextButtonStyles,
  ISmartpriceTextButtonStyles,
} from './smartprice-text-button.styles';

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
  fontFamily: currentFont()
};

describe('smartpriceTextButtonStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceTextButtonStyles: ISmartpriceTextButtonStyles = {
      containerViewStyle,
      labelTextStyle,
    };
    expect(smartpriceTextButtonStyles).toEqual(mockSmartpriceTextButtonStyles);
  });
});
