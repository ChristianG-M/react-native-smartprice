// Copyright 2020 Prescryptive Health, Inc.

import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  IThemeContext,
  ThemeContext,
} from '../../providers/theme/theme.context';
import {
  getStyleSheet,
  IStyleSheetMap,
} from '../../providers/theme/get-style-sheet';
import { ThemeName } from '../../theming/theme-name';

import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';

export type ScreenSize = 'Small' | 'Medium' | 'Large';

export interface ICurrentTheme<TStyles> extends IThemeContext {
  styles: StyleSheet.NamedStyles<TStyles>;
  screenSize: ScreenSize;
}

function GetScreenSize(): ScreenSize {
  const isLarge = useMediaQuery({
    minDeviceWidth: 900,
  });
  const isMedium = useMediaQuery({
    minDeviceWidth: 600,
    maxDeviceWidth: 899,
  });
  if (isLarge) {
    return 'Large';
  }
  if (isMedium) {
    return 'Medium';
  }
  return 'Small';
}

function GetResponsiveStyles<T>(
  styles: StyleSheet.NamedStyles<T>,
  size: ScreenSize
): StyleSheet.NamedStyles<T> {
  const baseStyleNames = Object.keys(styles).filter((styleName) => {
    return !(
      styleName.endsWith('Small') ||
      styleName.endsWith('Medium') ||
      styleName.endsWith('Large')
    );
  });

  const responsiveStyles = baseStyleNames.reduce((acc, curr: string) => {
    const key = curr as keyof T;
    const responsiveKey = `${curr}${size}` as keyof T;
    const x = { ...(styles[responsiveKey] || styles[key]) };
    return { ...acc, [key]: x };
  }, {} as StyleSheet.NamedStyles<T>);
  return responsiveStyles;
}

export function useCurrentTheme<TStyles>(
  stylesheetMap: IStyleSheetMap<TStyles, ThemeName>,
  themeContext: typeof ThemeContext = ThemeContext
): ICurrentTheme<TStyles> {
  const { themeName, setThemeName } = useContext(themeContext);
  const styles = getStyleSheet<TStyles>(stylesheetMap, themeName);
  const screenSize = GetScreenSize();

  return {
    styles: GetResponsiveStyles<TStyles>(styles, screenSize),
    setThemeName,
    themeName,
    screenSize,
  };
}
