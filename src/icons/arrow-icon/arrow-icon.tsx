// Copyright 2021 Prescryptive Health, Inc.
import React, { ReactElement } from 'react';
import Svg, { Path } from 'react-native-svg';

export type Direction = 'up' | 'down' | 'left' | 'right';

export const ArrowIcon = (props: {
  color?: string;
  direction?: Direction;
}): ReactElement => {
  const rotation = () => {
    switch (props.direction) {
      case 'up':
        return 90;
      case 'down':
        return -90;
      case 'left':
        return 0;
      case 'right':
        return 180;
      default:
        return 0;
    }
  };
  return (
    <Svg
      width='12'
      height='21'
      viewBox='0 0 12 21'
      opacity='0.75'
      fill={props.color ?? '#007AFF'}
      rotation={rotation()}>
      <Path d='M9.60938 20.3906C9.86719 20.6484 10.1953 20.7891 10.582 20.7891C11.3555 20.7891 11.9766 20.1797 11.9766 19.4062C11.9766 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9766 1.75781 11.9766 1.38281C11.9766 0.609375 11.3555 0 10.582 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0.0117188 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.492188 11.4727L9.60938 20.3906Z' />
    </Svg>
  );
};
