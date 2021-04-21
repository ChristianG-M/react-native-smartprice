// Copyright 2021 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';

export interface ISmartpriceModalStyles {
  containerViewStyle: ViewStyle;
  scrollContainerViewStyle: ViewStyle;
  formContainerViewStyle: ViewStyle;
  activityIndicatorViewStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  height: '92.6108%',
  marginTop: '7.3891%',
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const scrollContainerViewStyle: ViewStyle = {
  flex: 1,
  width: '100%',
  justifyContent: 'flex-start',
  overflow: 'scroll',
};

const formContainerViewStyle: ViewStyle = {
  width: '87.2%',
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
