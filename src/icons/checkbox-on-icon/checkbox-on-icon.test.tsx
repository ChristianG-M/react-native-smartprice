// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { CheckboxOnIcon } from './checkbox-on-icon';
import Svg from 'react-native-svg';

describe('CheckboxOnIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<CheckboxOnIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.type).toEqual('path');
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<CheckboxOnIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.props.fill).toEqual(mockColor);
  });
});
