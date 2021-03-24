// Copyright 2020 Prescryptive Health, Inc.

import { IContentMap, getContent } from './get-content';

interface ITestContent {
  name: string;
}

const testContent: IContentMap<ITestContent> = {
  defaultContent: {
    name: 'default',
  },
  locales: new Map([
    ['sp', { name: 'Spanish (Spain)' }],
    ['sp-mx', { name: 'Spanish (Mexican)' }],
  ]),
};

describe('getContent', () => {
  // TODO: Re-write this with it.each()
  it('gets expected content', () => {
    getsExpectedContent('sp-MX', testContent.locales?.get('sp-mx')?.name);
    getsExpectedContent('sp-mx', testContent.locales?.get('sp-mx')?.name);
    getsExpectedContent('SP-mx', testContent.locales?.get('sp-mx')?.name);
    getsExpectedContent('sp-SP', testContent.locales?.get('sp')?.name);
    getsExpectedContent('en-CA', testContent.defaultContent.name);
  });

  function getsExpectedContent(localeCode: string, expectedName?: string) {
    const content = getContent<ITestContent>(testContent, localeCode);
    expect(content.name).toEqual(expectedName);
  }
});
