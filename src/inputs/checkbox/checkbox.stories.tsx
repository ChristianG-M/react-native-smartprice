// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, FunctionComponent } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Checkbox } from './checkbox';
import { MarkdownText } from '../../text/markdown-text/markdown-text';

interface IComponentProps {
  isDisabled?: boolean;
  isChecked?: boolean;
}

const TestComponentWithTextLabel: FunctionComponent<IComponentProps> = ({
  isDisabled,
  isChecked,
}) => {
  const [isOn, setIsOn] = useState(isChecked);
  const change = () => setIsOn(!isOn);
  return (
    <Checkbox
      onChange={change}
      checked={isOn}
      label='label for checkbox'
      disabled={isDisabled}
    />
  );
};

const termsAndConditions =
  'I accept the [Terms and Conditions](#) and [Privacy Policy](https://www.google.com)';

const TestComponentWithMarkdown: FunctionComponent<IComponentProps> = ({
  isDisabled,
  isChecked,
}) => {
  const [isOn, setIsOn] = useState(isChecked);
  const change = () => setIsOn(!isOn);
  const label = <MarkdownText content={termsAndConditions} />;

  return (
    <Checkbox
      onChange={change}
      checked={isOn}
      label={label}
      disabled={isDisabled}
    />
  );
};

storiesOf('Checkbox', module)
  .add('Default', () => <TestComponentWithTextLabel />)
  .add('Disabled', () => <TestComponentWithTextLabel isDisabled={true} />)
  .add('Disabled and Checked', () => (
    <TestComponentWithTextLabel isDisabled={true} isChecked={true} />
  ))
  .add('With hyperlink', () => <TestComponentWithMarkdown />)
  .add('With hyperlink (disabled)', () => (
    <TestComponentWithMarkdown isDisabled={true} />
  ));
