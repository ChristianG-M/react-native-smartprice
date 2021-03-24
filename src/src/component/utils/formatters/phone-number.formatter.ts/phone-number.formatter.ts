// Copyright 2020 Prescryptive Health, Inc.

export class PhoneNumberFormatter {
  public static clean(phoneNumber = ''): string {
    return phoneNumber.replace(/[^0-9]+/g, '');
  }

  public static formatForApi(phoneNumber: string): string {
    const cleanedPhoneNumber = PhoneNumberFormatter.clean(phoneNumber);
    const areaCode = '+1';

    return cleanedPhoneNumber ? `${areaCode}${cleanedPhoneNumber}` : '';
  }

  public static formatForUI(phoneNumberString = ''): string {
    const phoneNumberRegex = /^1?(\d{3})(\d{3})(\d{4})$/;
    const cleanedString = phoneNumberString.replace(/\D/g, '');
    const matchedPhoneNumber = phoneNumberRegex.exec(cleanedString);
    return matchedPhoneNumber
      ? `(${matchedPhoneNumber[1]}) ${matchedPhoneNumber[2]}-${matchedPhoneNumber[3]}`
      : '';
  }
}
