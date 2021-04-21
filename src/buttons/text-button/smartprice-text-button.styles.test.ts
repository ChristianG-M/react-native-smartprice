// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { FontSize, FontWeight } from '../../utils/types/fonts';
import {
  smartpriceTextButtonStyles,
  ISmartpriceTextButtonStyles,
} from './smartprice-text-button.styles';

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

describe('smartpriceTextButtonStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceTextButtonStyles: ISmartpriceTextButtonStyles = {
      containerViewStyle,
      labelTextStyle,
    };
    expect(smartpriceTextButtonStyles).toEqual(mockSmartpriceTextButtonStyles);
  });
});
