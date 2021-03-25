// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { CheckboxOffIcon } from './checkbox-off-icon';
import Svg from 'react-native-svg';

describe('CheckboxOffIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<CheckboxOffIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.type).toEqual('rect');
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<CheckboxOffIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.props.stroke).toEqual(mockColor);
  });
});
