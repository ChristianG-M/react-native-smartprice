// Copyright 2020 Prescryptive Health, Inc.

import { ViewStyle } from 'react-native';
import { IStyleSheetMap, getStyleSheet } from './get-style-sheet';
import { ThemeName } from '../../theming/theme-name';

export interface ITestStyles {
  viewStyle: ViewStyle;
}

const viewStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
};

const darkviewStyle: ViewStyle = {
  ...viewStyle,
  backgroundColor: '#000',
};

const defaultStyleSheet = {
  viewStyle,
};

const darkStyleSheet = {
  viewStyle: darkviewStyle,
};

export const testStyles: IStyleSheetMap<ITestStyles> = {
  default: defaultStyleSheet,
  themes: new Map([['dark', darkStyleSheet]]),
};

describe('getStyleSheet', () => {
  it('gets expected styles', () => {
    getsExpectedStyles(defaultStyleSheet.viewStyle, undefined);
    getsExpectedStyles(defaultStyleSheet.viewStyle, 'default');
    getsExpectedStyles(darkStyleSheet.viewStyle, 'dark');
  });

  function getsExpectedStyles(
    expectedViewStyle: ViewStyle,
    themeName?: ThemeName
  ) {
    const styles = getStyleSheet(testStyles, themeName);
    expect(styles.viewStyle).toEqual(expectedViewStyle);
  }
});
