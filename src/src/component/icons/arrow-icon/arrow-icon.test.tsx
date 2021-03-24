// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { ArrowIcon, Direction } from './arrow-icon';
import Svg from 'react-native-svg';

describe('arrowIcon', () => {
  it('render component with default color', () => {
    const testRenderer = renderer.create(<ArrowIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.fill).toEqual('#007AFF');
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<ArrowIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.fill).toEqual(mockColor);
  });

  it('render component with correct direction', () => {
    const mockDirection: Direction = 'down';
    const testRenderer = renderer.create(
      <ArrowIcon direction={mockDirection} />
    );
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.transform).toEqual('rotate(-90 0 0)');
  });
});
