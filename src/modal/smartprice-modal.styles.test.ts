// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';

import {
  smartpriceModalStyles,
  ISmartpriceModalStyles,
} from './smartprice-modal.styles';

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
  justifyContent: 'flex-start',
  overflow: 'scroll',
};

const formContainerViewStyle: ViewStyle = {
  width: '87.2vw',
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

describe('smartpriceModalStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceModalStyles: ISmartpriceModalStyles = {
      activityIndicatorViewStyle,
      containerViewStyle,
      scrollContainerViewStyle,
      formContainerViewStyle,
    };
    expect(smartpriceModalStyles).toEqual(mockSmartpriceModalStyles);
  });
});
