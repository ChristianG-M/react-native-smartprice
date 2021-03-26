// Copyright 2020 Prescryptive Health, Inc.

import { dateMaskInputContentEs } from './date-mask-input.content.es';

describe('DateMaskInputContent', () => {
  it('has expected content (default)', () => {
    expect(dateMaskInputContentEs.placeholder).toEqual('Fecha de nacimiento');
  });
});
