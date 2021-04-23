// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';

export interface ISmartPriceStyles {
  containerViewStyle: ViewStyle;
  buttonWrapperViewStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  backgroundColor: 'rgba(0,0,0,0.68)',
  zIndex: 1000,
  elevation: 1000,
};

const buttonWrapperViewStyle: ViewStyle = {
  width: '100%',
};

export const smartPriceStyles: ISmartPriceStyles = {
  containerViewStyle,
  buttonWrapperViewStyle,
};
