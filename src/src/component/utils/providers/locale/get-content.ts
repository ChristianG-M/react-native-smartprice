// Copyright 2020 Prescryptive Health, Inc.

import { DefaultLocaleCode } from './locale.context';

export interface IContentMap<T> {
  readonly defaultContent: T;
  readonly locales?: Map<string, T>;
}

export function getContent<T>(
  contentMap: IContentMap<T>,
  localeCode: string = DefaultLocaleCode
): T {
  const contentForLocaleCode = contentMap.locales?.get(
    localeCode.toLowerCase()
  );
  if (contentForLocaleCode) {
    return contentForLocaleCode;
  }

  const languageCode = localeCode.split('-')[0].toLowerCase();
  const contentForLanguageCode = contentMap.locales?.get(languageCode);

  return contentForLanguageCode || contentMap.defaultContent;
}
