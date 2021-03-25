// Copyright 2020 Prescryptive Health, Inc.

import { ThemeName } from '../../theming/theme-name';
import { createContext } from 'react';

export interface IThemeContext {
  readonly themeName: ThemeName;
  readonly setThemeName: (themeName: ThemeName) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  themeName: 'default',
  setThemeName: (_: ThemeName) => ({}),
});
