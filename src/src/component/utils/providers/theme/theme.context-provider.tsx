// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, FunctionComponent } from 'react';
import { ThemeContext, IThemeContext } from './theme.context';
import { ThemeName } from '../../theming/theme-name';

export interface IThemeContextProviderProps {
  initialTheme?: ThemeName;
}

export const ThemeContextProvider: FunctionComponent<IThemeContextProviderProps> = ({
  initialTheme = 'default',
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(initialTheme);
  const themeContext: IThemeContext = {
    themeName,
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
