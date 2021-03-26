// Copyright 2020 Prescryptive Health, Inc.

import { isValidEmail } from './email.validator';

describe('IsValidEmail', () => {
  it.each([
    ['', false],
    ['username', false],
    ['username@', false],
    ['username@mail', false],
    ['username@mail.c', false],
    ['@name@mail.c', false],
    ['na me@mail.com', false],
    ['name@mai l.com', false],
    ['na#me@mail.com', false],
    ['n$ame@mail.com', false],
    ['!name@mail.com', false],
    ['name@mai!.com', false],
    ['username@mail.commo', true],
    ['username@mail.comm', true],
    ['username@mail.com ', false],
    ['username@mail.co', true],
    ['username@mail.com.mx', true],
    ['firstname.lastname@mail.com', true],
  ])('validates email address (%p)', (email: string, isValid: boolean) => {
    expect(isValidEmail(email)).toEqual(isValid);
  });
});
