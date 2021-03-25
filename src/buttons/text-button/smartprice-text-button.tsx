// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent } from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { smartpriceTextButtonStyles } from './smartprice-text-button.styles';

export interface ISmartpriceTextButtonProps {
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  label?: string;
  underline?: boolean;
  onPress: () => void;
}

export const SmartpriceTextButton: FunctionComponent<ISmartpriceTextButtonProps> = ({
  underline = false,
  textStyle,
  viewStyle,
  label,
  onPress,
}): React.ReactElement => {
  const underlineStyle: TextStyle = underline
    ? { textDecorationLine: 'underline' }
    : {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[smartpriceTextButtonStyles.containerViewStyle, viewStyle]}
    >
      <Text
        style={[
          smartpriceTextButtonStyles.labelTextStyle,
          textStyle,
          underlineStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
