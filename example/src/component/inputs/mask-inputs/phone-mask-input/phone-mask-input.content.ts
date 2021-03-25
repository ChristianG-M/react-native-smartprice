// Copyright 2020 Prescryptive Health, Inc.

import { IContentMap } from '@phx/core/src/providers/locale/get-content';
import { phoneMaskInputContentEs } from './phone-mask-input.content.es';

export interface IPhoneMaskInputContent {
  placeholder: string;
}

const defaultContent: IPhoneMaskInputContent = {
  placeholder: 'Phone number',
};

export const phoneMaskInputContent: IContentMap<IPhoneMaskInputContent> = {
  defaultContent,
  locales: new Map([['es', phoneMaskInputContentEs]]),
};
