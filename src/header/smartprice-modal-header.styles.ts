// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { VerticalMobile } from '../utils/types/spacing';

export interface ISmartPriceModalHeaderStyles {
  brandContainerStyle: ViewStyle;
  headerViewStyle: ViewStyle;
  iconViewStyle: ViewStyle;
  rightIconContainerViewStyle: ViewStyle;
  leftIconContainerViewStyle: ViewStyle;
}

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

export const smartpriceModalHeaderStyles: ISmartPriceModalHeaderStyles = {
  brandContainerStyle,
  headerViewStyle,
  leftIconContainerViewStyle,
  rightIconContainerViewStyle,
  iconViewStyle,
};
