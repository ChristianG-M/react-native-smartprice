// Copyright 2020 Prescryptive Health, Inc.

import { dateMaskInputContent } from './date-mask-input.content';

describe('DateMaskInputContent', () => {
  it('has expected content (default)', () => {
    const content = dateMaskInputContent.defaultContent;
    expect(content.placeholder).toEqual('Date of birth (MM-DD-YYYY)');
  });
});
