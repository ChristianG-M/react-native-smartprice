// Copyright 2021 Prescryptive Health, Inc.

import { Dimensions } from 'react-native';

export const getReponsiveDimension = (dim: string) => {
  const type = dim.substr(dim.length - 2, 2);

  const dimension = parseFloat(dim.substring(0, dim.length - 2));

  const { width, height } = Dimensions.get('screen');

  return type === 'vw' ? (dimension * width) / 100 : (dimension * height) / 100;
};

export const Heights = {
  _64: getReponsiveDimension('7.8816vh'),
  _48: getReponsiveDimension('5.9113vh'),
  _32: getReponsiveDimension('3.9408vh'),
  _24: getReponsiveDimension('2.9556vh'),
  _16: getReponsiveDimension('1.9704vh'),
  _8: getReponsiveDimension('0.9852vh'),
};
