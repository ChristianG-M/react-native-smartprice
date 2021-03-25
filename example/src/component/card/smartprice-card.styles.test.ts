// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { PurpleScale, GreyScale } from '../utils/types/colors';
import { VerticalMobile } from '../utils/types/spacing';
import {
  smartpriceCardStyles,
  ISmartpriceCardStyles,
} from './smartprice-card.styles';

const containerViewStyle: ViewStyle = {
  backgroundColor: 'white',
  borderRadius: 9,
  shadowOffset: { width: 2, height: 2 },
  shadowColor: 'rgb(90, 128, 145)',
  shadowRadius: 20,
  shadowOpacity: 0.5,
};

const labelTextStyle: TextStyle = {
  color: GreyScale.dark,
  fontWeight: '700',
};

const contentTextStyle: TextStyle = {
  color: GreyScale.black,
  fontWeight: '700',
  fontSize: 16,
};

const memberIdTextStyle: TextStyle = {
  ...contentTextStyle,
  fontSize: 28,
};

const headerViewStyle: ViewStyle = {
  backgroundColor: PurpleScale.regular,
  borderTopLeftRadius: 9,
  borderTopRightRadius: 9,
  height: 48,
  justifyContent: 'center',
  paddingLeft: '3.9408vh',
};

const headerTextStyle: TextStyle = { color: 'white', fontWeight: '700' };

const dataViewStyle: ViewStyle = { paddingRight: VerticalMobile.Regular };

const marginStyle: ViewStyle = { marginBottom: VerticalMobile.Regular };

const paddingStyle: ViewStyle = { padding: VerticalMobile.Regular };

const rowViewStyle: ViewStyle = {
  flexDirection: 'row',
  marginBottom: VerticalMobile.Regular,
};

describe('smartpriceCardStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceCardStyles: ISmartpriceCardStyles = {
      containerViewStyle,
      contentTextStyle,
      dataViewStyle,
      labelTextStyle,
      headerTextStyle,
      headerViewStyle,
      marginStyle,
      memberIdTextStyle,
      paddingStyle,
      rowViewStyle,
    };
    expect(smartpriceCardStyles).toEqual(mockSmartpriceCardStyles);
  });
});
