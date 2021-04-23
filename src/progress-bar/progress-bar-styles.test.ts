// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale } from '../utils/types/colors';
import { getReponsiveDimension } from '../utils/types/sizing';
import { progressBarStyles, IProgressBarStyles } from './progress-bar.styles';

const viewStyle: ViewStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: getReponsiveDimension('87.2vw'),
  position: 'absolute',
  bottom: 0,
};

const barViewStyle: ViewStyle = {
  width: '100%',
  height: 10,
  backgroundColor: '#BC99FF',
  borderRadius: 8,
};

const stepStyle: TextStyle = {
  paddingTop: 20,
  paddingBottom: 5,
  color: GreyScale.dark,
  fontWeight: '700',
};

describe('progressBarStyles', () => {
  it('has expected default styles', () => {
    const mockProgressBarStyles: IProgressBarStyles = {
      barViewStyle,
      viewStyle,
      stepStyle,
    };
    expect(progressBarStyles).toEqual(mockProgressBarStyles);
  });
});
