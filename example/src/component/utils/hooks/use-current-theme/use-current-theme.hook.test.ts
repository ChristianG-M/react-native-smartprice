// Copyright 2020 Prescryptive Health, Inc.

import { useContext, createContext } from 'react';
import { ViewStyle } from 'react-native';
import { useCurrentTheme, ICurrentTheme } from './use-current-theme.hook';
import {
  getStyleSheet,
  IStyleSheetMap,
} from '../../providers/theme/get-style-sheet';
import { IThemeContext } from '../../providers/theme/theme.context';
import { ThemeName } from '../../theming/theme-name';
import { useMediaQuery } from 'react-responsive';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useContext: jest.fn(),
}));
const useContextMock = useContext as jest.Mock;

jest.mock('../../providers/theme/get-style-sheet');
const getStyleSheetMock = getStyleSheet as jest.Mock;

jest.mock('react-responsive', () => ({
  ...jest.requireActual<Record<string, unknown>>('react-responsive'),
  useMediaQuery: jest.fn(),
}));
const useMediaQueryMock = useMediaQuery as jest.Mock;

interface ITestStyles {
  viewStyle: ViewStyle;
  viewStyleSmall?: ViewStyle;
  viewStyleMedium?: ViewStyle;
  viewStyleLarge?: ViewStyle;
}

const defaultStylesheet: ITestStyles = {
  viewStyle: { backgroundColor: '#fff', flex: 1 },
};
const darkStylesheet: ITestStyles = {
  viewStyle: { backgroundColor: '#000', flex: 1 },
};

export const stylesheetMap: IStyleSheetMap<ITestStyles> = {
  default: defaultStylesheet,
  themes: new Map([['dark', darkStylesheet]]),
};

describe('useCurrentThemeHook', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    getStyleSheetMock.mockReturnValue(defaultStylesheet);
  });
  it('calls useContext to get ThemeContext', () => {
    const contextState: IThemeContext = {
      themeName: 'dark',
      setThemeName: jest.fn(),
    };
    const contextMock = createContext<IThemeContext>(contextState);
    useContextMock.mockReturnValueOnce(contextState);

    useCurrentTheme<ITestStyles>(stylesheetMap, contextMock);
    expect(useContextMock).toHaveBeenCalledWith(contextMock);
  });

  it('calls getStyleSheet with expected arguments', () => {
    const contextState: IThemeContext = {
      themeName: 'dark',
      setThemeName: jest.fn(),
    };
    const contextMock = createContext<IThemeContext>(contextState);
    useContextMock.mockReturnValueOnce(contextState);
    getStyleSheetMock.mockReturnValueOnce(darkStylesheet.viewStyle);

    useCurrentTheme<ITestStyles>(stylesheetMap, contextMock);
    expect(getStyleSheetMock).toHaveBeenCalledWith(stylesheetMap, 'dark');
  });

  it('returns expected theme properties', () => {
    const setThemeName = (_: ThemeName) => ({});
    const themeContextStateMock = {
      themeName: 'dark',
      setThemeName,
    };
    useContextMock.mockReturnValue(themeContextStateMock);
    getStyleSheetMock.mockReturnValue(defaultStylesheet);

    const theme: ICurrentTheme<ITestStyles> = useCurrentTheme<ITestStyles>(
      stylesheetMap
    );

    expect(theme.themeName).toEqual(themeContextStateMock.themeName);
    expect(theme.setThemeName).toEqual(themeContextStateMock.setThemeName);
    expect(theme.styles).toEqual(defaultStylesheet);
  });

  it.each([
    [false, false],
    [false, true],
    [true, false],
  ])(
    'returns base styles if no responsive styles available',
    (isLarge, isMedium) => {
      const defaultStylesheetMock: ITestStyles = {
        viewStyle: { backgroundColor: '#fff', flex: 1 },
      };
      const stylesheetMapMock: IStyleSheetMap<ITestStyles> = {
        default: defaultStylesheetMock,
      };

      const contextState: IThemeContext = {
        themeName: 'default',
        setThemeName: jest.fn(),
      };

      const contextMock = createContext<IThemeContext>(contextState);

      getStyleSheetMock.mockReturnValue(defaultStylesheetMock);
      useMediaQueryMock.mockReturnValueOnce(isLarge);
      useMediaQueryMock.mockReturnValueOnce(isMedium);

      const { styles } = useCurrentTheme<ITestStyles>(
        stylesheetMapMock,
        contextMock
      );

      expect(styles.viewStyle).toEqual(defaultStylesheetMock.viewStyle);
    }
  );

  it.each([
    ['Small', false, false],
    ['Medium', false, true],
    ['Large', true, false],
  ])(
    'can use %s styles when responsive style available for correct screen size',
    (screenSize, isLarge, isMedium) => {
      const responsiveKey = `viewStyle${screenSize}` as keyof ITestStyles;
      const defaultStylesheetMock: ITestStyles = {
        viewStyle: { backgroundColor: '#fff', flex: 1 },
        [responsiveKey]: { backgroundColor: '#aaa', flex: 1, width: 9001 },
      };
      const stylesheetMapMock: IStyleSheetMap<ITestStyles> = {
        default: defaultStylesheetMock,
      };

      const contextState: IThemeContext = {
        themeName: 'default',
        setThemeName: jest.fn(),
      };

      const contextMock = createContext<IThemeContext>(contextState);
      getStyleSheetMock.mockReturnValueOnce(defaultStylesheetMock);
      useMediaQueryMock.mockReturnValueOnce(isLarge);
      useMediaQueryMock.mockReturnValueOnce(isMedium);

      const { styles } = useCurrentTheme<ITestStyles>(
        stylesheetMapMock,
        contextMock
      );
      const x = defaultStylesheetMock[responsiveKey];
      expect(styles.viewStyle).toEqual(x);
    }
  );
});
