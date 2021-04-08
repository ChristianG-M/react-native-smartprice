// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressBar } from './progress-bar';
import { progressBarStyles } from './progress-bar.styles';
import { View, Text } from 'react-native';
import { Line } from 'rc-progress';


const mockStep = 1;
const mockTotalSteps = 4;
const mockWidth = 3;

describe('SmartpriceModalHeader', () => {
  it('has expected properties and styles', () => {
    const testRenderer = renderer.create(
      <ProgressBar
        step={mockStep}
        totalSteps={mockTotalSteps}
        width={mockWidth}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    expect(container.props.style).toEqual(
      progressBarStyles.viewStyle);
  });

  it('has expected Progress Line properties', () => {
    const testRenderer = renderer.create(
      <ProgressBar
        step={mockStep}
        totalSteps={mockTotalSteps}
        width={mockWidth}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    const progressLine = container.props.children[0];

    expect(progressLine.type).toEqual(Line);
  });

  it('has expected step properties and styles', () => {
    const testRenderer = renderer.create(
      <ProgressBar
        step={mockStep}
        totalSteps={mockTotalSteps}
        width={mockWidth}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    const step = container.props.children[1];

    expect(step.type).toEqual(Text);
    expect(step.props.style).toEqual(
      progressBarStyles.stepStyle
    );
  });
});