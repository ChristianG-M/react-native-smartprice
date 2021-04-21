// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle, TextStyle } from 'react-native';
import { GreyScale } from '../utils/types/colors';
import { VerticalMobile } from '../utils/types/spacing';

export interface ISmartpriceFooterStyleStyles {
  mediumLinkTextStyle: TextStyle;
  centeredRowViewStyle: ViewStyle;
  footerViewStyle: ViewStyle;
}

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

export const smartpriceFooterStyles: ISmartpriceFooterStyleStyles = {
  mediumLinkTextStyle,
  centeredRowViewStyle,
  footerViewStyle,
};
