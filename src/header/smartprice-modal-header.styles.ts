// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { getReponsiveDimension } from '../utils/types/sizing';
import { VerticalMobile } from '../utils/types/spacing';

export interface ISmartPriceModalHeaderStyles {
  brandContainerStyle: ViewStyle;
  headerViewStyle: ViewStyle;
  iconViewStyle: ViewStyle;
  rightIconContainerViewStyle: ViewStyle;
  leftIconContainerViewStyle: ViewStyle;
}

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

export const smartpriceModalHeaderStyles: ISmartPriceModalHeaderStyles = {
  brandContainerStyle,
  headerViewStyle,
  leftIconContainerViewStyle,
  rightIconContainerViewStyle,
  iconViewStyle,
};
