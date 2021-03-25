// Copyright 2020 Prescryptive Health, Inc.

export const getPhoneNumber = (tenDigitPhoneNumber: string): string | null => {
  const phoneText = `+1${(tenDigitPhoneNumber || '')
    .trim()
    .replace(/[^\d]/gi, '')}`;
  if (phoneText.length !== 12) {
    return null;
  }
  return phoneText;
};
