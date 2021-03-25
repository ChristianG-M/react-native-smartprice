// Copyright 2021 Prescryptive Health, Inc.
import React, { ReactElement } from 'react';
import Svg from 'react-native-svg';
import { PurpleScale } from '../../utils/types/colors';

export const CheckboxOnIcon = (props: { color?: string }): ReactElement => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 1C3.68629 1 1 3.68629 1 7V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V7C23 3.68629 20.3137 1 17 1H7ZM10.8619 16.9159L19.3889 8.38894L17.4444 6.4444L9.88967 13.9991L6.5556 10.665L4.61105 12.6096L8.9174 16.9159C9.17526 17.1738 9.525 17.3187 9.88967 17.3187C10.2543 17.3187 10.6041 17.1738 10.8619 16.9159Z'
        fill={props.color ?? PurpleScale.regular}
      />
    </Svg>
  );
};
