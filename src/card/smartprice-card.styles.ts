// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle, TextStyle } from 'react-native';
import { GreyScale, PurpleScale } from '../utils/types/colors';
import { currentFont } from '../utils/types/fonts';
import { getReponsiveDimension } from '../utils/types/sizing';
import { VerticalMobile } from '../utils/types/spacing';

export interface ISmartpriceCardStyles {
  containerViewStyle: ViewStyle;
  contentTextStyle: TextStyle;
  dataViewStyle: ViewStyle;
  labelTextStyle: TextStyle;
  headerTextStyle: TextStyle;
  headerViewStyle: ViewStyle;
  paddingStyle: ViewStyle;
  rowViewStyle: ViewStyle;
  memberIdTextStyle: TextStyle;
  marginStyle: ViewStyle;
}

const containerViewStyle: ViewStyle = {
  backgroundColor: 'white',
  borderRadius: 9,
  shadowOffset: { width: 2, height: 2 },
  shadowColor: 'rgb(90, 128, 145)',
  shadowRadius: 20,
  shadowOpacity: 0.5,
  elevation: 1
};

const labelTextStyle: TextStyle = {
  color: GreyScale.dark,
  fontWeight: '700',
  fontFamily: currentFont()
};

const contentTextStyle: TextStyle = {
  color: GreyScale.black,
  fontWeight: '700',
  fontSize: 16,
  fontFamily: currentFont()
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
  paddingLeft: getReponsiveDimension('3.9408vh'),
};

const headerTextStyle: TextStyle = { color: 'white', fontWeight: '700', fontFamily: currentFont() };

const dataViewStyle: ViewStyle = { paddingRight: VerticalMobile.Regular };

const marginStyle: ViewStyle = { marginBottom: VerticalMobile.Regular };

const paddingStyle: ViewStyle = { padding: VerticalMobile.Regular };

const rowViewStyle: ViewStyle = {
  flexDirection: 'row',
  marginBottom: VerticalMobile.Regular,
};

export const smartpriceCardStyles: ISmartpriceCardStyles = {
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
