// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { PurpleScale } from '../utils/types/colors';

export interface ISmartPriceModalHeaderStyles {
  brandContainerStyle: ViewStyle;
  headerViewStyle: ViewStyle;
  headerDividerStyle: ViewStyle;
  iconViewStyle: ViewStyle;
  rightIconContainerViewStyle: ViewStyle;
  leftIconContainerViewStyle: ViewStyle;
}

const headerViewStyle: ViewStyle = {
  height: '9.8522vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const headerDividerStyle: ViewStyle = {
  backgroundColor: PurpleScale.medium,
  width: '87.2vw',
  height: 1,
  position: 'absolute',
  bottom: 0,
};

const brandContainerStyle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: '3.2019vh',
};

const rightIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  right: '5.33vw',
};

const leftIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  left: '5.33vw',
};

const iconViewStyle: ViewStyle = { maxWidth: '6.4vw' };

export const smartpriceModalHeaderStyles: ISmartPriceModalHeaderStyles = {
  brandContainerStyle,
  headerViewStyle,
  headerDividerStyle,
  leftIconContainerViewStyle,
  rightIconContainerViewStyle,
  iconViewStyle,
};
