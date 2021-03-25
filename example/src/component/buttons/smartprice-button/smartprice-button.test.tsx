// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartpriceButton } from './smartprice-button';
import { smartpriceButtonStyles } from './smartprice-button.styles';
import { TouchableHighlight, Text } from 'react-native';

describe('SmartpriceButton', () => {
  it('has expected styles', () => {
    const mockStyle = { flex: 1 };
    const mockOnPress = jest.fn();
    const mockDisable = false;
    const mockBgColor = 'red';
    const mockColor = 'blue';
    const mockLabel = 'A label';
    const testRenderer = renderer.create(
      <SmartpriceButton
        isDisabled={mockDisable}
        label={mockLabel}
        onPress={mockOnPress}
        viewStyle={mockStyle}
        backgroundColor={mockBgColor}
        color={mockColor}
      />
    );
    const touchableHighlight = testRenderer.root.findByType(TouchableHighlight);
    expect(touchableHighlight.props.style).toEqual([
      smartpriceButtonStyles.containerViewStyle,
      { backgroundColor: mockBgColor },
      {},
    ]);
    expect(touchableHighlight.props.onPress).toEqual(mockOnPress);
    expect(touchableHighlight.props.disabled).toEqual(mockDisable);
    expect(touchableHighlight.props.children.type).toEqual(Text);
    expect(touchableHighlight.props.children.props.style).toEqual([
      smartpriceButtonStyles.labelTextStyle,
      { color: mockColor },
    ]);
    expect(touchableHighlight.props.children.props.children).toEqual(mockLabel);
  });
});
