// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartpriceTextButton } from './smartprice-text-button';
import { smartpriceTextButtonStyles } from './smartprice-text-button.styles';
import { TouchableOpacity, Text } from 'react-native';

describe('SmartpriceTextButton', () => {
  it('has expected styles', () => {
    const mockViewStyle = { flex: 1 };
    const mockOnPress = jest.fn();
    const mockUnderline = false;
    const mockTextStyle = { color: 'red' };
    const mockLabel = 'A label';
    const testRenderer = renderer.create(
      <SmartpriceTextButton
        label={mockLabel}
        onPress={mockOnPress}
        viewStyle={mockViewStyle}
        textStyle={mockTextStyle}
        underline={mockUnderline}
      />
    );
    const touchableOpacity = testRenderer.root.findByType(TouchableOpacity);
    expect(touchableOpacity.props.style).toEqual([
      smartpriceTextButtonStyles.containerViewStyle,
      mockViewStyle,
    ]);
    expect(touchableOpacity.props.onPress).toEqual(mockOnPress);

    expect(touchableOpacity.props.children.type).toEqual(Text);
    expect(touchableOpacity.props.children.props.style).toEqual([
      smartpriceTextButtonStyles.labelTextStyle,
      mockTextStyle,
      mockUnderline ? { textDecorationLine: 'underline' } : {},
    ]);
    expect(touchableOpacity.props.children.props.children).toEqual(mockLabel);
  });
});
