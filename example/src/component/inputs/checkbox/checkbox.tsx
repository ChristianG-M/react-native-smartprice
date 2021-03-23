// Copyright 2020 Prescryptive Health, Inc.

import React, { ReactElement, ReactNode } from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useCurrentTheme } from '../../utils/hooks/use-current-theme/use-current-theme.hook';
import { ICheckboxStyles, checkboxStyles } from './checkbox.styles';
import { SmartPriceIconButton } from '../../buttons/icon-button/icon-button';
import { CheckboxOnIcon } from '../../icons/checkbox-on-icon/checkbox-on-icon';
import { CheckboxOffIcon } from '../../icons/checkbox-off-icon/checkbox-off-icon';

export interface ICheckboxProps {
  onChange: (isChecked: boolean) => void;
  checked?: boolean;
  isDisabled?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  label?: ReactNode;
}

export const Checkbox = ({
  onChange,
  checked,
  isDisabled,
  viewStyle,
  label,
}: ICheckboxProps): ReactElement => {
  const { styles } = useCurrentTheme<ICheckboxStyles>(checkboxStyles);

  const onPress = () => {
    onChange(!checked);
  };

  return (
    <View style={[styles.containerViewStyle, viewStyle]}>
      <SmartPriceIconButton onPress={onPress} isDisabled={isDisabled}>
        {checked ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
      </SmartPriceIconButton>
      <View style={styles.labelViewStyle}>{label}</View>
    </View>
  );
};
