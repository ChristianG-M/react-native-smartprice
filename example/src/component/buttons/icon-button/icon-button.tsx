// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

export interface ISmartPriceIconButtonProps {
  onPress: () => void;
  viewStyle?: ViewStyle;
  isDisabled?: boolean;
}

export const SmartPriceIconButton: FunctionComponent<ISmartPriceIconButtonProps> = ({
  children,
  viewStyle,
  isDisabled,
  onPress,
}): React.ReactElement => {
  return (
    <TouchableOpacity style={viewStyle} onPress={onPress} disabled={isDisabled}>
      {children}
    </TouchableOpacity>
  );
};
