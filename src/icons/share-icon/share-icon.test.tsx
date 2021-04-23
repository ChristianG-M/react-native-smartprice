// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { ShareIcon } from './share-icon';
import Svg, { Path } from 'react-native-svg';

describe('ShareIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<ShareIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.type).toEqual(Path);
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<ShareIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.fill).toEqual(mockColor);
  });
});
