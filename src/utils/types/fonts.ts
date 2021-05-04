// Copyright 2020 Prescryptive Health, Inc.
import { Platform } from 'react-native';

export enum FontSize {
  medium = 18,
  default = 16,
  small = 14,
}

export enum FontWeight {
  bold = '700',
  semibold = '500',
  regular = '400',
}

export const currentFont = () => {
  if (Platform.OS === 'android'){
    return 'Roboto';
  } else if (Platform.OS === 'ios'){
    return 'System';
  } else if (Platform.OS === 'web') {
    return 'Roboto, Arial, san-serif'
  }
}
