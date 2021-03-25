// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { VerticalMobile } from '../utils/types/spacing';

export interface ISmartpriceModalStyles {
  containerViewStyle: ViewStyle;
  scrollContainerViewStyle: ViewStyle;
  formContainerViewStyle: ViewStyle;
  activityIndicatorViewStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  height: '92.6108vh',
  marginTop: '7.3891vh',
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const scrollContainerViewStyle: ViewStyle = {
  flex: 1,
  width: '100vw',
  justifyContent: 'center',
  paddingTop: VerticalMobile.Big,
  overflow: 'scroll',
};

const formContainerViewStyle: ViewStyle = {
  width: '87.2vw',
  alignSelf: 'center',
  marginTop: VerticalMobile.Big,
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
