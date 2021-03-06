// Copyright 2021 Prescryptive Health, Inc.
import React, { ReactElement } from 'react';
import Svg, { Path, Rect, Defs, ClipPath, G } from 'react-native-svg';

export const HelpIcon = (props: { color?: string }): ReactElement => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM9.96601 7.99737L9.3657 8.61102C9.0322 8.95119 8.79208 9.25801 8.67202 9.73826C8.61866 9.9517 8.58531 10.1918 8.58531 10.4986H7.2513V10.1651C7.2513 9.85832 7.30466 9.56484 7.39804 9.29136C7.53144 8.9045 7.75155 8.55766 8.03169 8.27752L8.85878 7.43709C9.1656 7.14361 9.31234 6.70338 9.22563 6.23648C9.13892 5.75624 8.7654 5.34936 8.29849 5.21596C7.55812 5.00919 6.8711 5.4294 6.65099 6.06306C6.57095 6.30985 6.36418 6.49661 6.10405 6.49661H5.90394C5.51708 6.49661 5.25028 6.12309 5.357 5.74957C5.64381 4.76907 6.47757 4.02202 7.51143 3.86194C8.52528 3.70186 9.49243 4.22879 10.0927 5.06255C10.8798 6.14977 10.6464 7.31703 9.96601 7.99737ZM7.2513 13.1667V11.8327H8.58531V13.1667H7.2513Z'
          fill={props.color ?? '#00A3D9'}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect
            width='16'
            height='16'
            fill='white'
            transform='translate(0 0.5)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
