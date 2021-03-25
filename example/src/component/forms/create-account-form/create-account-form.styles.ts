// Copyright 2020 Prescryptive Health, Inc.
import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale, BlueScale } from '../../utils/types/colors';
import { HorizontalMobile, VerticalMobile } from '../../utils/types/spacing';

export interface ICreateAccountFormStyles {
  checkboxMarginStyle: ViewStyle;
  containerViewStyle: ViewStyle;
  biggerVerticalMarginStyle: ViewStyle;
  titleContainerStyle: TextStyle;
  paragraphMarginStyle: TextStyle;
  linkTextStyle: TextStyle;
  requirementsLabelTextStyle: TextStyle;
  twoColumnErrorViewStyle: ViewStyle;
  twoColumnInputViewStyle: ViewStyle;
  formRowViewStyle: ViewStyle;
  errorTextStyle: TextStyle;
}

const biggerVerticalMarginStyle: ViewStyle = {
  marginTop: VerticalMobile.Big,
  marginBottom: VerticalMobile.Medium,
};

const titleContainerStyle: TextStyle = {
  color: GreyScale.black,
  fontSize: 22,
  textAlign: 'left',
  fontWeight: '700',
  margin: 0,
};

const paragraphMarginStyle: TextStyle = {
  marginVertical: VerticalMobile.Big,
  fontSize: 16,
};

const linkTextStyle: TextStyle = { color: BlueScale.dark };

const requirementsLabelTextStyle: TextStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: 16,
  lineHeight: 28,
};

const checkboxMarginStyle: ViewStyle = { marginTop: 0 };

const containerViewStyle: ViewStyle = {
  // paddingTop: VerticalMobile.Double,
};

const twoColumnInputViewStyle: ViewStyle = { marginRight: 12, width: '48%' };

const formRowViewStyle: ViewStyle = {
  flexDirection: 'row',
  marginVertical: VerticalMobile.Regular,
};

const twoColumnErrorViewStyle: ViewStyle = { width: '200%' };

const errorTextStyle: TextStyle = {
  color: 'red',
  marginLeft: HorizontalMobile.Regular,
};

export const createAccountFormStyles: ICreateAccountFormStyles = {
  checkboxMarginStyle,
  containerViewStyle,
  errorTextStyle,
  biggerVerticalMarginStyle,
  titleContainerStyle,
  paragraphMarginStyle,
  linkTextStyle,
  requirementsLabelTextStyle,
  twoColumnErrorViewStyle,
  twoColumnInputViewStyle,
  formRowViewStyle,
};
