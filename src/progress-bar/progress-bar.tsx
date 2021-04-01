// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { Line } from 'rc-progress';
import { progressBarStyles } from './progress-bar.styles';

export interface IProgressBarProps {
    step: number,
    totalSteps: number,
    width: number,
}

export const ProgressBar: FunctionComponent<IProgressBarProps> = ({
  step,
  totalSteps,
  width,
}): ReactElement => {
  return (
    <View style={progressBarStyles.viewStyle}>
        <Line percent={step / totalSteps * 100} strokeWidth={width} trailWidth={width} strokeColor='#BC99FF' />
        <Text style={progressBarStyles.stepStyle}>
            Step {step} of {totalSteps}
        </Text>
    </View>
  );
};