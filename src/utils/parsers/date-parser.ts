// Copyright 2020 Prescryptive Health, Inc.
const minAge = 13;

const dateOfBirth = (dateOfBirthText: string) => {
  if (isNaN(Date.parse(dateOfBirthText))) {
    return null;
  }
  const dob = new Date(Date.parse((dateOfBirthText || '').trim()));
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const minDateOfBirth = new Date(year - minAge, month, date);
  if (dob > minDateOfBirth) {
    return { error: 'You must be older than 13' };
  }
  return dob;
};

export interface DobError {
  error: string;
}

export const getDateOfBirth = (dateOfBirthText: string): Date | DobError | null => {
  return dateOfBirth(dateOfBirthText);
};
