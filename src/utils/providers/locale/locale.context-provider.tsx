// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, FunctionComponent } from 'react';
import {
  LocaleCode,
  ILocaleContext,
  LocaleContext,
  DefaultLocaleCode,
} from './locale.context';

export interface ILocaleContextProviderProps {
  initialLocaleCode?: LocaleCode;
}

export const LocaleContextProvider: FunctionComponent<ILocaleContextProviderProps> = ({
  initialLocaleCode = DefaultLocaleCode,
  children,
}) => {
  const [localeCode, setLocaleCode] = useState<LocaleCode>(initialLocaleCode);
  const localeContext: ILocaleContext = {
    localeCode,
    setLocaleCode,
  };
  return (
    <LocaleContext.Provider value={localeContext}>
      {children}
    </LocaleContext.Provider>
  );
};
