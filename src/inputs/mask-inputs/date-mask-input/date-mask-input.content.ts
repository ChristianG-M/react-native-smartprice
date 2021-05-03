// Copyright 2020 Prescryptive Health, Inc.

import { IContentMap } from '@phx/core/src/providers/locale/get-content';
import { dateMaskInputContentEs } from './date-mask-input.content.es';

export interface IDateMaskInputContent {
  placeholder: string;
}

const defaultContent: IDateMaskInputContent = {
  placeholder: 'Date of birth (MM-DD-YYYY)',
};

export const dateMaskInputContent: IContentMap<IDateMaskInputContent> = {
  defaultContent,
  locales: new Map([['es', dateMaskInputContentEs]]),
};
