// Copyright 2021 Prescryptive Health, Inc.
import { ViewStyle } from 'react-native';

export interface ISmartpriceModalStyles {
  containerViewStyle: ViewStyle;
  scrollContainerViewStyle: ViewStyle;
  formContainerViewStyle: ViewStyle;
  activityIndicatorViewStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  height: '412.118px',
  marginTop: '732.881px',
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const scrollContainerViewStyle: ViewStyle = {
  flex: 1,
  width: '896px',
  justifyContent: 'flex-start',
  overflow: 'scroll',
};

const formContainerViewStyle: ViewStyle = {
  width: '781.312px',
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
