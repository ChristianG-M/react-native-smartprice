// Copyright 2020 Prescryptive Health, Inc.

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { DateMaskInput } from './date-mask-input';

const TestComponentA: React.FC = () => {
  const [date, changeDate] = useState('1234567890');
  return <DateMaskInput date={date} onDateChange={changeDate} />;
};

const TestComponentB: React.FC = () => {
  const [date, changeDate] = useState('(123) 231-2114');
  return <DateMaskInput date={date} onDateChange={changeDate} />;
};

const TestComponentC: React.FC = () => {
  const [date, changeDate] = useState('');
  return <DateMaskInput date={date} onDateChange={changeDate} />;
};

const TestComponentD: React.FC = () => {
  const [date, changeDate] = useState('1222212111');
  return (
    <DateMaskInput
      date={date}
      onDateChange={changeDate}
      errorMessage='Invalid number'
    />
  );
};

const TestComponentE: React.FC = () => {
  const [date, changeDate] = useState('12222');
  return (
    <DateMaskInput
      date={date}
      onDateChange={changeDate}
      errorMessage='Invalid number'
    />
  );
};

storiesOf('Date Mask', module).add('Default', () => <TestComponentA />);
storiesOf('Date Mask', module).add('Filled with formatted number', () => (
  <TestComponentB />
));
storiesOf('Date Mask', module).add('No filled', () => <TestComponentC />);
storiesOf('Date Mask', module).add('Error', () => <TestComponentD />);
storiesOf('Date Mask', module).add('wrong number', () => <TestComponentE />);
