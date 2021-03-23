// Copyright 2020 Prescryptive Health, Inc.

import { useContext } from 'react';
import {
  ILocaleContext,
  LocaleContext,
} from '../../providers/locale/locale.context';
import { IContentMap, getContent } from '../../providers/locale/get-content';

export interface ICurrentContent<TContent> extends ILocaleContext {
  content: TContent;
}

export function useCurrentContent<TContent>(
  contentMap: IContentMap<TContent>
): ICurrentContent<TContent> {
  const { localeCode, setLocaleCode } = useContext(LocaleContext);
  const content = getContent<TContent>(contentMap, localeCode);

  return { content, setLocaleCode, localeCode };
}
