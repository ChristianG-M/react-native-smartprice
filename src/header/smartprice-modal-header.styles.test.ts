// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { VerticalMobile } from '../utils/types/spacing';
import {
  smartpriceModalHeaderStyles,
  ISmartPriceModalHeaderStyles,
} from './smartprice-modal-header.styles';

const headerViewStyle: ViewStyle = {
  height: '16.3793%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const brandContainerStyle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: '3.2019%',
  position: 'absolute',
  top: VerticalMobile.Big
};

const rightIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  right: '5.33%',
  top: VerticalMobile.Big
};

const leftIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  left: '6.33%',
  top: '4.33%'
};

const iconViewStyle: ViewStyle = { maxWidth: '6.4%' };

describe('smartpriceModalHeaderStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceModalHeaderStyles: ISmartPriceModalHeaderStyles = {
      brandContainerStyle,
      headerViewStyle,
      leftIconContainerViewStyle,
      rightIconContainerViewStyle,
      iconViewStyle,
    };
    expect(smartpriceModalHeaderStyles).toEqual(
      mockSmartpriceModalHeaderStyles
    );
  });
});
