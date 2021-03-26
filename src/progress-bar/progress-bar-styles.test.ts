// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale } from '../utils/types/colors';
import { VerticalMobile } from '../utils/types/spacing';
import {
    progressBarStyles,
    IProgressBarStyles,
} from './progress-bar.styles';

const viewStyle: ViewStyle={
    flexDirection: 'column',
    justifyContent: 'flex-end',
}

const stepStyle: TextStyle = {
    paddingTop: '20px',
    paddingBottom: '5px',
    color: GreyScale.dark,
    fontWeight: '700',
}

describe('progressBarStyles', () => {
  it('has expected default styles', () => {
    const mockProgressBarStyles: IProgressBarStyles = {
        viewStyle,
        stepStyle,
    };
    expect(progressBarStyles).toEqual(mockProgressBarStyles);
  });
});