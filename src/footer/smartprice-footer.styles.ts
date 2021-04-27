// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle, TextStyle } from 'react-native';
import { GreyScale } from '../utils/types/colors';
import { getReponsiveDimension } from '../utils/types/sizing';
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
  height: getReponsiveDimension('11.8541vh'),
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
