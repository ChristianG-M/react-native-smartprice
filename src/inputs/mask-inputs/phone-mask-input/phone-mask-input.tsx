// Copyright 2020 Prescryptive Health, Inc.

import React, { ReactElement, useState } from 'react';
import { TextStyle } from 'react-native';
import { BaseInput } from '../../base-input/base-input';
import {
  phoneMaskInputContent,
  IPhoneMaskInputContent,
} from './phone-mask-input.content';
import { useCurrentContent } from '../../../utils/hooks/use-current-content/use-current-content.hook';
import { PhoneNumberFormatter } from '../../../utils/formatters/phone-number.formatter.ts/phone-number.formatter';

export interface IPhoneMaskInputProps {
  phoneNumber?: string;
  onPhoneNumberChange?: (phoneNumber: string) => void;
  textStyle?: TextStyle;
  errorMessage?: string;
  onSubmitEditing?: () => void;
}

export const PhoneMaskInput = (props: IPhoneMaskInputProps): ReactElement => {
  const { phoneNumber, onPhoneNumberChange, textStyle, errorMessage, onSubmitEditing } = props;

  const { content } = useCurrentContent<IPhoneMaskInputContent>(
    phoneMaskInputContent
  );

  const extractFromMask = (value: string) => {
    const PhoneNumberMask = [
      /['(']/,
      /[1-9]/,
      /\d/,
      /\d/,
      /[')']/,
      /[' ']/,
      /\d/,
      /\d/,
      /\d/,
      /['\-']/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];

    const arrayValue = value.split('');

    const unMasked = arrayValue
      .map((substring, i) => {
        if (i > PhoneNumberMask.length - 1) {
          return null;
        }

        const isMatch = PhoneNumberMask[i].exec(substring);

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
        masked += `(${s}`;
      } else if (i === 2 && i !== length - 1) {
        masked += `${s}) `;
      } else if (i === 5 && i !== length - 1) {
        masked += `${s}-`;
      } else {
        masked += s;
      }
    });

    return masked;
  };

  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState<string>(
    maskValue(PhoneNumberFormatter.clean(phoneNumber))
  );

  const onChangeHandler = (value: string) => {
    const { unMasked, masked } = extractFromMask(value);
    if (onPhoneNumberChange) {
      onPhoneNumberChange(unMasked);
    }
    setMaskedPhoneNumber(masked);
  };

  return (
    <BaseInput
      textStyle={textStyle}
      value={maskedPhoneNumber}
      onChangeText={onChangeHandler}
      placeholder={content.placeholder}
      errorMessage={errorMessage}
      keyboardType='numeric'
      onSubmitEditing={onSubmitEditing}
    />
  );
};
