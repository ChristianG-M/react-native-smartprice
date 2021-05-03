// Copyright 2020 Prescryptive Health, Inc.

import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { DateMaskInput } from './date-mask-input';
import { BaseInput } from '../../base-input/base-input';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(),
}));

const useStateMock = useState as jest.Mock;

describe('DateMaskInput', () => {
  const setMaskedDateNumber = jest.fn();
  const maskedDateNumber = '';

  beforeEach(() => {
    useStateMock.mockReset();
    useStateMock.mockReturnValue([maskedDateNumber, setMaskedDateNumber]);
  });

  it.each([
    ['1', '1'],
    ['12', '12'],
    ['123', '12/3'],
    ['1234', '12/34'],
    ['12345', '12/34/5'],
    ['123456', '12/34/56'],
    ['1234567', '12/34/567'],
    ['12345678', '12/34/5678'],
    ['123456789', '12/34/56789'],
    ['1234567890', '12/34/567890'],
  ])(
    'render correct masked number (%p)',
    (inputNumber: string, expected: string) => {
      const setMasked = jest.fn();
      useStateMock.mockReturnValue([expected, setMasked]);

      const testRenderer = renderer.create(<DateMaskInput date={''} />);

      const input = testRenderer.root.findByType(BaseInput);
      void act(() => {
        input.props.onChangeText(inputNumber);
      });
      expect(setMasked).toHaveBeenCalledWith(expected);
    }
  );

  it('render correct number and gets unmasked value', () => {
    const mockDate = '12-34-5678';
    let dob = '';
    const changePhoneNumber = jest.fn((phone: string) => (dob = phone));

    const testRenderer = renderer.create(
      <DateMaskInput date={mockDate} onDateChange={changePhoneNumber} />
    );

    const input = testRenderer.root.findByType(BaseInput);
    void act(() => {
      input.props.onChangeText(mockDate);
    });
    expect(dob).toEqual('5678-12-34T00:00:00');
  });

  it('verify useState default value', () => {
    const testRenderer = renderer.create(<DateMaskInput date={'1234'} />);
    expect(useStateMock).toHaveBeenNthCalledWith(1, '1234');

    useStateMock.mockClear();
    testRenderer.update(<DateMaskInput date={''} />);
    expect(useStateMock).toHaveBeenNthCalledWith(1, '');
  });
});
