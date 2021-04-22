// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { getReponsiveDimension } from '../utils/types/sizing';

export interface ISmartpriceModalStyles {
  containerViewStyle: ViewStyle;
  scrollContainerViewStyle: ViewStyle;
  formContainerViewStyle: ViewStyle;
  activityIndicatorViewStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  height: getReponsiveDimension('92.6108vh'),
  marginTop: getReponsiveDimension('7.3891vh'),
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const scrollContainerViewStyle: ViewStyle = {
  flex: 1,
  width: getReponsiveDimension('100vw'),
  justifyContent: 'flex-start',
  overflow: 'scroll',
};

const formContainerViewStyle: ViewStyle = {
  width: getReponsiveDimension('87.2vw'),
  alignSelf: 'center',
};

const activityIndicatorViewStyle: ViewStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0c0c0c73',
};

export const smartpriceModalStyles: ISmartpriceModalStyles = {
  activityIndicatorViewStyle,
  containerViewStyle,
  scrollContainerViewStyle,
  formContainerViewStyle,
};
