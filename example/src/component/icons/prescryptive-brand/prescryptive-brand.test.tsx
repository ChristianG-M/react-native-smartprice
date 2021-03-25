// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { PrescryptiveBrand } from './prescryptive-brand';
import Svg from 'react-native-svg';

describe('PrescryptiveBrand', () => {
  it('render component with correct type', () => {
    const testRenderer = renderer.create(<PrescryptiveBrand />);
    const icon = testRenderer.root.findByType(Svg);
    expect(icon.props.children.type).toEqual('path');
  });

  it('render component with correct light color', () => {
    const mockColor = '#6240A3';
    const testRenderer = renderer.create(<PrescryptiveBrand light={false} />);
    const icon = testRenderer.root.findByType(Svg);
    const path = icon.props.children;
    expect(path.props.fill).toEqual(mockColor);
  });

  it('render component with correct color', () => {
    const mockColor = '#fff';
    const testRenderer = renderer.create(<PrescryptiveBrand light={true} />);
    const icon = testRenderer.root.findByType(Svg);
    const path = icon.props.children;
    expect(path.props.fill).toEqual(mockColor);
  });
});
