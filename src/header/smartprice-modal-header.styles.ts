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
  height: '72.887px',
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
  height: '14.248px',
  position: 'absolute',
  top: VerticalMobile.Big
};

const rightIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  right: '47.756px',
  top: VerticalMobile.Big
};

const leftIconContainerViewStyle: ViewStyle = {
  position: 'absolute',
  left: '56.716px',
  top: '19.268px'
};

const iconViewStyle: ViewStyle = { maxWidth: '57.344px' };

export const smartpriceModalHeaderStyles: ISmartPriceModalHeaderStyles = {
  brandContainerStyle,
  headerViewStyle,
  leftIconContainerViewStyle,
  rightIconContainerViewStyle,
  iconViewStyle,
};
