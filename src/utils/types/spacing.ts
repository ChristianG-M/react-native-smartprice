// Copyright 2020 Prescryptive Health, Inc.

import { getReponsiveDimension } from './sizing';

export const VerticalMobile = {
  Double: getReponsiveDimension('7.8816vh'),
  Bigger: getReponsiveDimension('5.9113vh'),
  Big: getReponsiveDimension('3.9408vh'),
  Medium: getReponsiveDimension('2.9556vh'),
  Regular: getReponsiveDimension('1.9704vh'),
  Small: getReponsiveDimension('0.9852vh'),
};

export const HorizontalMobile = {
  Double: getReponsiveDimension('25.6vw'),
  Bigger: getReponsiveDimension('12.8vw'),
  Big: getReponsiveDimension('8.5333vw'),
  Medium: getReponsiveDimension('6.4vw'),
  Regular: getReponsiveDimension('4.2666vw'),
  Small: getReponsiveDimension('2.1333vw'),
};

export enum BorderRadius {
  input = 4,
  container = 8,
}
