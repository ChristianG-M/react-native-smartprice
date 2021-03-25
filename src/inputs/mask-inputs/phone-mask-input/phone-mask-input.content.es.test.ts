// Copyright 2020 Prescryptive Health, Inc.

import { phoneMaskInputContentEs } from './phone-mask-input.content.es';

describe('PhoneMaskInputContent', () => {
  it('has expected content (default)', () => {
    expect(phoneMaskInputContentEs.placeholder).toEqual('Número telefónico');
  });
});
