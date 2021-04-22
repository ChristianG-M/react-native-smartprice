// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { HelpIcon } from './help-icon';
import Svg, { Path, G } from 'react-native-svg';

describe('HelpIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<HelpIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children[0].type).toEqual(G);
    expect(icon.props.children[0].props.children.type).toEqual(Path);
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<HelpIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    const path = icon.props.children[0].props.children;
    expect(path.props.fill).toEqual(mockColor);
  });
});
