// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, ReactNode } from 'react';
import renderer from 'react-test-renderer';
import { ThemeContextProvider } from './theme.context-provider';
import { ThemeContext, IThemeContext } from './theme.context';
import { ThemeName } from '../../theming/theme-name';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(),
}));
const useStateMock = useState as jest.Mock;

type ContainerProps = { children: ReactNode };
jest.mock('./theme.context', () => ({
  ThemeContext: {
    Provider: ({ children }: ContainerProps) => <div>{children}</div>,
  },
}));

const ChildMock = jest.fn().mockReturnValue(<div />);

const themeNameMock: ThemeName = 'dark';
const setThemeNameMock = jest.fn();

describe('ThemeContextProvider', () => {
  beforeEach(() => {
    useStateMock.mockReturnValue([]);
  });

  it('calls useState with expected arguments', () => {
    renderer.create(<ThemeContextProvider />);

    expect(useStateMock).toHaveBeenCalledWith('default');
  });

  it('renders as ThemeContext.Provider with expected properties', () => {
    useStateMock.mockReturnValue([themeNameMock, setThemeNameMock]);

    const testRenderer = renderer.create(
      <ThemeContextProvider>
        <ChildMock />
      </ThemeContextProvider>
    );

    const provider = testRenderer.root.findByType(ThemeContext.Provider);

    const expectedThemeContext: IThemeContext = {
      themeName: themeNameMock,
      setThemeName: setThemeNameMock,
    };
    expect(provider.props.value).toEqual(expectedThemeContext);
    expect(provider.props.children).toEqual(<ChildMock />);
  });
});
