// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, ReactNode } from 'react';
import { LocaleContextProvider } from './locale.context-provider';
import {
  LocaleContext,
  ILocaleContext,
  DefaultLocaleCode,
  LocaleCode,
} from './locale.context';
import { create } from 'react-test-renderer';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(),
}));
const useStateMock = useState as jest.Mock;

type ContainerProps = { children: ReactNode };

jest.mock('./locale.context', () => ({
  LocaleContext: {
    Provider: ({ children }: ContainerProps) => <div>{children}</div>,
  },
}));

const ChildMock = jest.fn().mockReturnValue(<div />);

const localeCodeMock: LocaleCode = 'es-ES';
const setLocaleCodeMock = jest.fn();

describe('LocaleContextProvider', () => {
  beforeEach(() => {
    useStateMock.mockReturnValue([]);
  });

  it('calls useState with expected arguments', () => {
    create(<LocaleContextProvider />);

    expect(useStateMock).toHaveBeenCalledWith(DefaultLocaleCode);
  });

  it('renders as LocaleContext.Provider with expected properties', () => {
    useStateMock.mockReturnValue([localeCodeMock, setLocaleCodeMock]);

    const testRenderer = create(
      <LocaleContextProvider>
        <ChildMock />
      </LocaleContextProvider>
    );

    const provider = testRenderer.root.findByType(LocaleContext.Provider);

    const expectedLocaleContext: ILocaleContext = {
      localeCode: localeCodeMock,
      setLocaleCode: setLocaleCodeMock,
    };
    expect(provider.props.value).toEqual(expectedLocaleContext);
    expect(provider.props.children).toEqual(<ChildMock />);
  });
});
