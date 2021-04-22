// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, ReactElement } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { progressBarStyles } from './progress-bar.styles';

export interface IProgressBarProps {
  step: number;
  totalSteps: number;
  width: number;
}

export const ProgressBar: FunctionComponent<IProgressBarProps> = ({
  step,
  totalSteps,
  width,
}): ReactElement => {
  const stepWidth = Dimensions.get('screen').width * (step / totalSteps);

  const progressBarStyle = {
    ...progressBarStyles.barViewStyle,
    width: totalSteps === step ? stepWidth - 48 : stepWidth,
  };

  return (
    <View style={progressBarStyles.viewStyle}>
      <View style={progressBarStyle} />
      <Text style={progressBarStyles.stepStyle}>
        Step {step} of {totalSteps}
      </Text>
    </View>
  );
};
