// Copyright 2020 Prescryptive Health, Inc.

import { createContext } from 'react';
export type LocaleCode = 'en-US' | 'es-ES' | 'fr-CA';
export const DefaultLocaleCode: LocaleCode = 'en-US';

export interface ILocaleContext {
  readonly localeCode: LocaleCode;
  readonly setLocaleCode: (localeCode: LocaleCode) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  localeCode: DefaultLocaleCode,
  setLocaleCode: (_: LocaleCode) => ({}),
});
