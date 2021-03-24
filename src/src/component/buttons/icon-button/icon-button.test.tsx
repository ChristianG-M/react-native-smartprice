// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartPriceIconButton } from './icon-button';
import { TouchableOpacity } from 'react-native';

describe('SmartPriceIconButton', () => {
  it('has expected properties and styles', () => {
    const mockStyle = { flex: 1 };
    const mockOnPress = jest.fn();
    const mockDisable = false;
    const mockChildren = <div />;
    const testRenderer = renderer.create(
      <SmartPriceIconButton
        onPress={mockOnPress}
        viewStyle={mockStyle}
        isDisabled={mockDisable}
      >
        {mockChildren}
      </SmartPriceIconButton>
    );
    const touchableOpacity = testRenderer.root.findByType(TouchableOpacity);
    expect(touchableOpacity.props.style).toEqual(mockStyle);
    expect(touchableOpacity.props.onPress).toEqual(mockOnPress);
    expect(touchableOpacity.props.disabled).toEqual(mockDisable);
    expect(touchableOpacity.props.children).toEqual(mockChildren);
  });
});
