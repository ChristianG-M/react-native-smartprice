// Copyright 2020 Prescryptive Health, Inc.

export function isValidEmail(email: string): boolean {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/g;
  return !!email.match(regex);
}
