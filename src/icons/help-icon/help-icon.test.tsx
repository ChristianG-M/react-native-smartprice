// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { HelpIcon } from './help-icon';
import Svg from 'react-native-svg';

describe('HelpIcon', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<HelpIcon />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children[0].type).toEqual('g');
    expect(icon.props.children[0].props.children.type).toEqual('path');
  });

  it('render component with correct color', () => {
    const mockColor = 'red';
    const testRenderer = renderer.create(<HelpIcon color={mockColor} />);
    const icon = testRenderer.root.findByType(Svg);
    const path = icon.props.children[0].props.children;
    expect(path.props.fill).toEqual(mockColor);
  });
});
