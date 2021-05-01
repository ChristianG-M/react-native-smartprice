// Copyright 2020 Prescryptive Health, Inc.

import React, { ReactElement, useState } from 'react';
import { TextStyle } from 'react-native';
import { BaseInput } from '../../base-input/base-input';
import {
  dateMaskInputContent,
  IDateMaskInputContent,
} from './date-mask-input.content';
import { useCurrentContent } from '../../../utils/hooks/use-current-content/use-current-content.hook';
import { ViewStyle } from 'react-native';

export interface IDateMaskInputProps {
  date: string;
  onDateChange?: (phoneNumber: string) => void;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  errorMessageStyle?: TextStyle;
  errorMessage?: string;
}

export const DateMaskInput = (props: IDateMaskInputProps): ReactElement => {
  const {
    date,
    onDateChange,
    textStyle,
    errorMessage,
    errorMessageStyle,
    viewStyle,
  } = props;

  const { content } = useCurrentContent<IDateMaskInputContent>(
    dateMaskInputContent
  );

  const extractFromMask = (value: string) => {
    const DateNumberMask = [
      /\d/,
      /\d/,
      /['/']/,
      /\d/,
      /\d/,
      /['/']/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];

    const arrayValue = value.split('');

    const unMasked = arrayValue
      .map((substring, i) => {
        if (i > DateNumberMask.length - 1) {
          return null;
        }

        const isMatch = DateNumberMask[i].exec(substring);

        if (isMatch) {
          if (isNaN(parseInt(substring, 10))) {
            return null;
          }
          return substring;
        } else {
          if (!isNaN(parseInt(substring, 10))) {
            return substring;
          }

          return null;
        }
      })
      .filter((n) => n !== null)
      .join('');

    return { unMasked, masked: maskValue(unMasked) };
  };

  const maskValue = (unMasked: string) => {
    const splited = unMasked.split('');
    const length = splited.length;

    let masked = '';

    if (length === 0) {
      return '';
    }

    splited.forEach((s, i) => {
      if (i === 0) {
        masked += `${s}`;
      } else if (i === 1 && i !== length - 1) {
        masked += `${s}/`;
      } else if (i === 3 && i !== length - 1) {
        masked += `${s}/`;
      } else {
        masked += s;
      }
    });

    return masked;
  };

  const [maskedDateNumber, setMaskedDateNumber] = useState<string>(date);

  const onChangeHandler = (value: string) => {
    const { unMasked, masked } = extractFromMask(value);
    if (onDateChange) {
      const splited = unMasked.split('');
      if (splited.length === 8){
        const formattedDate = `${splited[4]}${splited[5]}${splited[6]}${splited[7]}-${splited[0]}${splited[1]}-${splited[2]}${splited[3]}T00:00:00`;
        onDateChange(formattedDate);
      }
    }
    setMaskedDateNumber(masked);
  };

  return (
    <BaseInput
      textStyle={textStyle}
      containerStyle={viewStyle}
      errorMessageStyle={errorMessageStyle}
      value={maskedDateNumber}
      onChangeText={onChangeHandler}
      placeholder={content.placeholder}
      errorMessage={errorMessage}
      keyboardType='numeric'
    />
  );
};
