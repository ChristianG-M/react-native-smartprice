// Copyright 2020 Prescryptive Health, Inc.

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { PhoneMaskInput } from './phone-mask-input';

const TestComponentA: React.FC = () => {
  const [phoneNumber, changePhoneNumber] = useState('1234567890');
  return (
    <PhoneMaskInput
      phoneNumber={phoneNumber}
      onPhoneNumberChange={changePhoneNumber}
    />
  );
};

const TestComponentB: React.FC = () => {
  const [phoneNumber, changePhoneNumber] = useState('(123) 231-2114');
  return (
    <PhoneMaskInput
      phoneNumber={phoneNumber}
      onPhoneNumberChange={changePhoneNumber}
    />
  );
};

const TestComponentC: React.FC = () => {
  const [phoneNumber, changePhoneNumber] = useState('');
  return (
    <PhoneMaskInput
      phoneNumber={phoneNumber}
      onPhoneNumberChange={changePhoneNumber}
    />
  );
};

const TestComponentD: React.FC = () => {
  const [phoneNumber, changePhoneNumber] = useState('1222212111');
  return (
    <PhoneMaskInput
      phoneNumber={phoneNumber}
      onPhoneNumberChange={changePhoneNumber}
      errorMessage='Invalid number'
    />
  );
};

const TestComponentE: React.FC = () => {
  const [phoneNumber, changePhoneNumber] = useState('12222');
  return (
    <PhoneMaskInput
      phoneNumber={phoneNumber}
      onPhoneNumberChange={changePhoneNumber}
      errorMessage='Invalid number'
    />
  );
};

storiesOf('Phone Mask', module).add('Default', () => <TestComponentA />);
storiesOf('Phone Mask', module).add('Filled with formatted number', () => (
  <TestComponentB />
));
storiesOf('Phone Mask', module).add('No filled', () => <TestComponentC />);
storiesOf('Phone Mask', module).add('Error', () => <TestComponentD />);
storiesOf('Phone Mask', module).add('wrong number', () => <TestComponentE />);
