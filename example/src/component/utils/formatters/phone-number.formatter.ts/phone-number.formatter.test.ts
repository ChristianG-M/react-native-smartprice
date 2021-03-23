// Copyright 2020 Prescryptive Health, Inc.

import { PhoneNumberFormatter } from './phone-number.formatter';

describe('PhoneNumberFormatter', () => {
  it('cleans phone number', () => {
    expect(PhoneNumberFormatter.clean(undefined)).toEqual('');
    expect(PhoneNumberFormatter.clean('')).toEqual('');
    expect(PhoneNumberFormatter.clean('123456789')).toEqual('123456789');
    expect(PhoneNumberFormatter.clean('(123)456-789')).toEqual('123456789');
    expect(PhoneNumberFormatter.clean('(123) 456-789 ')).toEqual('123456789');
    expect(PhoneNumberFormatter.clean(' 123.456.789')).toEqual('123456789');
  });

  it('formats for api', () => {
    expect(PhoneNumberFormatter.formatForApi('')).toEqual('');
    expect(PhoneNumberFormatter.formatForApi('123456789')).toEqual(
      '+1123456789'
    );
    expect(PhoneNumberFormatter.formatForApi('(123)456-789')).toEqual(
      '+1123456789'
    );
    expect(PhoneNumberFormatter.formatForApi('(123) 456-789 ')).toEqual(
      '+1123456789'
    );
    expect(PhoneNumberFormatter.formatForApi('(123) 456-789 ')).toEqual(
      '+1123456789'
    );
    expect(PhoneNumberFormatter.formatForApi(' 123.456.789')).toEqual(
      '+1123456789'
    );
  });

  it.each([
    ['+12345678900', '(234) 567-8900'],
    ['2345678900', '(234) 567-8900'],
    ['(234) 567-8900', '(234) 567-8900'],
    ['234-567-8900', '(234) 567-8900'],
    ['567-8900', ''],
    ['5678900', ''],
    ['', ''],
  ])('has consistent output %s => (234) 567-8900 or ""', (phoneNumberMock, expected) => {
    expect(PhoneNumberFormatter.formatForUI(phoneNumberMock)).toEqual(expected);
  });
});
