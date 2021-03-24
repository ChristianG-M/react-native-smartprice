// Copyright 2020 Prescryptive Health, Inc.

import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { PhoneMaskInput } from './phone-mask-input';
import { BaseInput } from '../../base-input/base-input';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(),
}));

const useStateMock = useState as jest.Mock;

describe('PhoneMaskInput', () => {
  const setMaskedPhoneNumber = jest.fn();
  const maskedPhoneNumber = '';

  beforeEach(() => {
    useStateMock.mockReset();
    useStateMock.mockReturnValue([maskedPhoneNumber, setMaskedPhoneNumber]);
  });

  it.each([
    ['1', '(1'],
    ['12', '(12'],
    ['123', '(123'],
    ['1234', '(123) 4'],
    ['12345', '(123) 45'],
    ['123456', '(123) 456'],
    ['1234567', '(123) 456-7'],
    ['12345678', '(123) 456-78'],
    ['123456789', '(123) 456-789'],
    ['1234567890', '(123) 456-7890'],
    ['12345678901', '(123) 456-78901'],
  ])(
    'render correct masked number (%p)',
    (inputNumber: string, expected: string) => {
      const setMasked = jest.fn();
      useStateMock.mockReturnValue([expected, setMasked]);

      const testRenderer = renderer.create(<PhoneMaskInput phoneNumber={''} />);

      const input = testRenderer.root.findByType(BaseInput);
      void act(() => {
        input.props.onChangeText(inputNumber);
      });
      expect(setMasked).toHaveBeenCalledWith(expected);
    }
  );

  it('render correct number and gets unmasked value', () => {
    const mockNumber = '1234567890';
    let phoneNumber = '';
    const changePhoneNumber = jest.fn((phone: string) => (phoneNumber = phone));

    const testRenderer = renderer.create(
      <PhoneMaskInput
        phoneNumber={mockNumber}
        onPhoneNumberChange={changePhoneNumber}
      />
    );

    const input = testRenderer.root.findByType(BaseInput);
    void act(() => {
      input.props.onChangeText(mockNumber);
    });
    expect(phoneNumber).toEqual(mockNumber);
  });

  it('verify useState default value', () => {
    const testRenderer = renderer.create(
      <PhoneMaskInput phoneNumber={'1234'} />
    );
    expect(useStateMock).toHaveBeenNthCalledWith(1, '(123) 4');

    useStateMock.mockClear();
    testRenderer.update(<PhoneMaskInput phoneNumber={''} />);
    expect(useStateMock).toHaveBeenNthCalledWith(1, '');
  });
});
