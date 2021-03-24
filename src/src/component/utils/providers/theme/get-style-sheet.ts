// Copyright 2020 Prescryptive Health, Inc.

import { StyleSheet } from 'react-native';
import { ThemeName } from '../../theming/theme-name';

export interface IStyleSheetMap<T, TThemeName = ThemeName> {
  default: StyleSheet.NamedStyles<T>;
  themes?: Map<TThemeName, StyleSheet.NamedStyles<T>>;
}

export function getStyleSheet<T, TThemeName = ThemeName>(
  styleSheets: IStyleSheetMap<T, TThemeName>,
  themeName?: TThemeName
): StyleSheet.NamedStyles<T> {
  if (themeName && styleSheets.themes) {
    const theme = styleSheets.themes?.get(themeName);
    return theme || styleSheets.default;
  }
  return styleSheets.default;
}
