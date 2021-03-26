// Copyright 2021 Prescryptive Health, Inc.
import React, { ReactElement } from 'react';
import Svg from 'react-native-svg';
import { PurpleScale } from '../../utils/types/colors';

export const CheckboxOffIcon = (props: { color?: string }): ReactElement => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <rect
        x='0.923077'
        y='0.923077'
        width='22.1538'
        height='22.1538'
        rx='4.61538'
        fill='white'
        stroke={props.color ?? PurpleScale.regular}
        strokeWidth='1.84615'
      />
    </Svg>
  );
};
