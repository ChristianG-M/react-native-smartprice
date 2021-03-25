// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, ReactElement, ReactNode } from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import { baseInputStyles } from './base-input.styles';
import '@expo/match-media';

export interface IBaseInputProps {
  value?: string;
  isDisabled?: boolean;
  keyboardType?: 'numeric' | 'default';
  onChangeText?: (value: string) => void;
  placeholder?: string;
  textStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  maxLength?: number;
}

export const BaseInput = (props: IBaseInputProps): ReactElement => {
  const [focusStyle, setFocusStyle] = useState({});
  const {
    value,
    textStyle,
    isDisabled,
    keyboardType,
    onChangeText,
    placeholder,
    errorMessage,
    errorMessageStyle,
    containerStyle,
    secureTextEntry,
    maxLength,
  } = props;

  const onFocus = () => setFocusStyle(baseInputStyles.focusTextStyle);
  const onBlur = () => setFocusStyle(baseInputStyles.blurTextStyle);
  const errorStyle: TextStyle = {
    ...baseInputStyles.errorMessageTextStyle,
    ...(errorMessageStyle as TextStyle),
  };

  const hasError = renderErrorNode(errorMessage, errorStyle);
  const invalidStyle = errorMessage && baseInputStyles.errorTextStyle;

  return (
    <View style={containerStyle}>
      <TextInput
        value={value}
        style={[baseInputStyles.textStyle, textStyle, focusStyle, invalidStyle]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
      {hasError}
    </View>
  );
};

export const renderErrorNode = (
  errorMessage?: string,
  style?: TextStyle
): ReactNode => {
  if (errorMessage !== undefined || errorMessage !== '') {
    return <Text style={style}>{errorMessage}</Text>;
  }
  return null;
};
