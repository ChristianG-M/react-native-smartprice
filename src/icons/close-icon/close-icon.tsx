// Copyright 2021 Prescryptive Health, Inc.
import React, { ReactElement } from 'react';
import Svg, { Path, G} from 'react-native-svg';

export const CloseIcon = (props: { color?: string }): ReactElement => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <G opacity='0.75'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.34383 5.00399C2.88539 4.54555 2.88539 3.80227 3.34383 3.34383C3.80227 2.88539 4.54555 2.88539 5.00399 3.34383L12 10.3399L18.9961 3.34383C19.4545 2.88539 20.1978 2.88539 20.6562 3.34383C21.1147 3.80227 21.1147 4.54555 20.6562 5.00399L13.6602 12L20.6562 18.996C21.1146 19.4544 21.1146 20.1977 20.6562 20.6562C20.1977 21.1146 19.4544 21.1146 18.996 20.6562L12 13.6602L5.00407 20.6562C4.54563 21.1146 3.80235 21.1146 3.3439 20.6562C2.88546 20.1977 2.88546 19.4544 3.3439 18.996L10.3399 12L3.34383 5.00399Z'
          fill={props.color ?? '#6240A3'}
        />
      </G>
    </Svg>
  );
};
