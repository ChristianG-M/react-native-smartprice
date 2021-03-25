// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { BaseInput } from './base-input';
import { TextInput, TextInputProps, Text } from 'react-native';

let updatedText = '';
const changeText = jest.fn((text: string) => (updatedText = text));

describe('BaseInput', () => {
  it('value is optional', () => {
    const container = renderer.create(<BaseInput />);
    const input = container.root.findByType(TextInput);
    expect(input.props.value).toBe(undefined);
  });
  it('can display secure text entry', () => {
    const container = renderer.create(<BaseInput />);
    const input = container.root.findByType(TextInput);
    void act(() => {
      container.update(
        <BaseInput
          value={updatedText}
          secureTextEntry={true}
          onChangeText={changeText}
        />
      );
    });
    expect(input.props.secureTextEntry).toBe(true);
  });
  it('changes text', () => {
    const container = renderer.create(<BaseInput onChangeText={changeText} />);
    const input = container.root.findByType(TextInput);
    void act(() => {
      const inputProps = input.props as TextInputProps;
      if (inputProps && inputProps.onChangeText) {
        inputProps.onChangeText('Text changed');
      }
    });
  });
  it('is editable', () => {
    const container = renderer.create(<BaseInput />);
    const input = container.root.findByType(TextInput);
    void act(() => container.update(<BaseInput value='Enabled Input' />));
    expect(input.props.editable).toBe(true);
  });
  it('is not editable', () => {
    const container = renderer.create(<BaseInput />);
    const input = container.root.findByType(TextInput);
    void act(() =>
      container.update(<BaseInput value='Enabled Input' isDisabled={true} />)
    );
    expect(input.props.editable).toBe(false);
  });
  it('can be numeric input', () => {
    const container = renderer.create(<BaseInput />);
    const input = container.root.findByType(TextInput);
    void act(() => container.update(<BaseInput keyboardType='numeric' />));
    expect(input.props.keyboardType).toBe('numeric');
  });
  it('displays error style and message', () => {
    const container = renderer.create(<BaseInput />);
    void act(() =>
      container.update(
        <BaseInput value='error' errorMessage='There has been an error' />
      )
    );
    const errorMessage = container.root.findByType(Text);
    expect(errorMessage.props.children).toBe('There has been an error');
  });
});
