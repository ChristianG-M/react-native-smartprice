// Copyright 2020 Prescryptive Health, Inc.

import { useContext } from 'react';
import { useCurrentContent, ICurrentContent } from './use-current-content.hook';
import { IContentMap, getContent } from '../../providers/locale/get-content';
import {
  ILocaleContext,
  LocaleContext,
} from '../../providers/locale/locale.context';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useContext: jest.fn(),
}));
const useContextMock = useContext as jest.Mock;

jest.mock('../../providers/locale/get-content');
const getContentMock = getContent as jest.Mock;

interface ITestContent {
  label: string;
  description: string;
}

const testContent: ITestContent = {
  label: 'Some label',
  description: 'Some description',
};

const contentMap: IContentMap<ITestContent> = {
  defaultContent: testContent,
};

const localeContextMock: ILocaleContext = {
  localeCode: 'en-US',
  setLocaleCode: jest.fn(),
};

describe('useCurrentContent', () => {
  beforeEach(() => {
    useContextMock.mockReturnValue({});
    getContentMock.mockReturnValue({});
  });

  it('calls useContext to get LocaleContext', () => {
    useCurrentContent<ITestContent>(contentMap);

    expect(useContextMock).toHaveBeenCalledWith(LocaleContext);
  });

  it('calls getContent with expected arguments', () => {
    useContextMock.mockReturnValue(localeContextMock);

    useCurrentContent<ITestContent>(contentMap);

    expect(getContentMock).toHaveBeenCalledWith(
      contentMap,
      localeContextMock.localeCode
    );
  });

  it('returns expected content', () => {
    useContextMock.mockReturnValue(localeContextMock);
    getContentMock.mockReturnValue(testContent);

    const content: ICurrentContent<ITestContent> = useCurrentContent<
      ITestContent
    >(contentMap);

    expect(content.localeCode).toEqual(localeContextMock.localeCode);
    expect(content.setLocaleCode).toEqual(localeContextMock.setLocaleCode);
    expect(content.content).toEqual(testContent);
  });
});
