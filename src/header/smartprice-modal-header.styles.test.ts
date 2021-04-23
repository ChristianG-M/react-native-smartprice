// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { getReponsiveDimension } from '../utils/types/sizing';
import { VerticalMobile } from '../utils/types/spacing';
import {
  smartpriceModalHeaderStyles,
  ISmartPriceModalHeaderStyles,
} from './smartprice-modal-header.styles';

const headerViewStyle: ViewStyle = {
  height: getReponsiveDimension('16.3793vh'),
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
  height: getReponsiveDimension('3.2019vh'),
  position: 'absolute',
  top: VerticalMobile.Big,
};

const rightIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  right: getReponsiveDimension('5.33vw'),
  top: VerticalMobile.Big,
};

const leftIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  left: getReponsiveDimension('6.33vw'),
  top: getReponsiveDimension('4.33vh'),
};

const iconViewStyle: ViewStyle = { maxWidth: getReponsiveDimension('6.4vw') };

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
