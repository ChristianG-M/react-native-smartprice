// Copyright 2021 Prescryptive Health Inc

import { getDateOfBirth } from "./date-parser";

describe('dateParser', () => {
  it('getDateOfBirth gets a date object from date string', () => {
    expect(getDateOfBirth('2000-01-02')).toEqual(new Date('2000-01-02'));
    expect(getDateOfBirth('2000/08/22')).toEqual(new Date('2000/08/22'));
  })

  it('getDateOfBirth gets null if provided string is not a date format', () => {
    expect(getDateOfBirth('22/08/2000')).toEqual(null);
  })

  it('getDateOfBirth cannot get a date of birth of less than 13 years', () => {
    expect(getDateOfBirth('2011-01-02')).toEqual({error: "You must be older than 13"});
  })

  
});