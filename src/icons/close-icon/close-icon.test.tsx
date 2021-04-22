// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { CloseIcon } from './close-icon';
import Svg, { Path, G } from 'react-native-svg';

describe('CheckboxOnIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<CloseIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.type).toEqual(G);
    expect(icon.props.children.props.children.type).toEqual(Path);
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<CloseIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    const path = icon.props.children.props.children;
    expect(path.props.fill).toEqual(mockColor);
  });
});
