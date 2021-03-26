// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent } from 'react';
import { Text, ViewStyle, StyleProp, TouchableHighlight } from 'react-native';
import { smartpriceButtonStyles } from './smartprice-button.styles';

export interface ISmartpriceButtonProps {
  viewStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  color?: string;
  label?: string;
  isDisabled?: boolean;
  onPress: () => void;
}

export const SmartpriceButton: FunctionComponent<ISmartpriceButtonProps> = ({
  backgroundColor,
  color,
  label,
  isDisabled,
  onPress,
}): React.ReactElement => {
  const bgColor = backgroundColor ? { backgroundColor } : {};
  const labelColor = color ? { color } : {};
  const disabledStyle = isDisabled ? { opacity: 0.5 } : {};
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        smartpriceButtonStyles.containerViewStyle,
        bgColor,
        disabledStyle,
      ]}
      disabled={isDisabled}
    >
      <Text style={[smartpriceButtonStyles.labelTextStyle, labelColor]}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};
