// Copyright 2020 Prescryptive Health, Inc.

import { phoneMaskInputContent } from './phone-mask-input.content';

describe('PhoneMaskInputContent', () => {
  it('has expected content (default)', () => {
    const content = phoneMaskInputContent.defaultContent;
    expect(content.placeholder).toEqual('Phone number');
  });
});
