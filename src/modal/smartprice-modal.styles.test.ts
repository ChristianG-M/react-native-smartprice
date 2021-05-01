// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';
import { getReponsiveDimension } from '../utils/types/sizing';

import {
  smartpriceModalStyles,
  ISmartpriceModalStyles,
} from './smartprice-modal.styles';

const containerViewStyle: ViewStyle = {
  height: getReponsiveDimension('92vh'),
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

const activityIndicatorCommonViewStyle: ViewStyle = {
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0c0c0c73',
};

const activityIndicatorViewStyle: ViewStyle = {
  ...activityIndicatorCommonViewStyle,
  display: 'none',
  position: 'absolute',
};

const activityIndicatorViewStyleBusy: ViewStyle = {
  ...activityIndicatorCommonViewStyle,
  display: 'flex',
  position: 'absolute',
};

const activityIndicatorStyleAndroid: ViewStyle = {
  ...activityIndicatorCommonViewStyle,
  position: 'relative',
  display: 'none',
};
const activityIndicatorStyleAndroidBusy: ViewStyle = {
  ...activityIndicatorCommonViewStyle,
  position: 'absolute',
  display: 'flex',
};

describe('smartpriceModalStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceModalStyles: ISmartpriceModalStyles = {
      activityIndicatorViewStyle,
      activityIndicatorStyleAndroid,
      activityIndicatorStyleAndroidBusy,
      activityIndicatorViewStyleBusy,
      containerViewStyle,
      scrollContainerViewStyle,
      formContainerViewStyle,
    };
    expect(smartpriceModalStyles).toEqual(mockSmartpriceModalStyles);
  });
});
