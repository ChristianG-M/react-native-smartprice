// Copyright 2020 Prescryptive Health, Inc.

import { ViewStyle } from 'react-native';
import { smartPriceStyles, ISmartPriceStyles } from './index.styles';

const containerViewStyle: ViewStyle = {
  backgroundColor: 'rgba(0,0,0,0.68)',
  zIndex: 1000,
  elevation: 1000,
};

const buttonWrapperViewStyle: ViewStyle = { width: '100%' };

describe('smartPriceStyles', () => {
  it('has expected default styles', () => {
    const mockSmartPriceStyles: ISmartPriceStyles = {
      containerViewStyle,
      buttonWrapperViewStyle,
    };
    expect(smartPriceStyles).toEqual(mockSmartPriceStyles);
  });
});
