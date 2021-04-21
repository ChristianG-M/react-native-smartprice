// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale } from '../utils/types/colors';
import { VerticalMobile } from '../utils/types/spacing';
import {
  smartpriceFooterStyles,
  ISmartpriceFooterStyleStyles,
} from './smartprice-footer.styles';

const mediumLinkTextStyle: TextStyle = { fontSize: 14 };

const centeredRowViewStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const footerViewStyle: ViewStyle = {
  flexDirection: 'row',
  height: '13.0541%',
  marginTop: 'auto',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  paddingTop: VerticalMobile.Regular,
  backgroundColor: GreyScale.light,
};

describe('smartpriceFooterStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceFooterStyles: ISmartpriceFooterStyleStyles = {
      mediumLinkTextStyle,
      centeredRowViewStyle,
      footerViewStyle,
    };
    expect(smartpriceFooterStyles).toEqual(mockSmartpriceFooterStyles);
  });
});
