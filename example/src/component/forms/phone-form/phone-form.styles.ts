// Copyright 2020 Prescryptive Health, Inc.
import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale, GreyScale, PurpleScale } from '../../utils/types/colors';
import { VerticalMobile } from '../../utils/types/spacing';

export interface IPhoneFormStyles {
  checkboxMarginStyle: ViewStyle;
  titleContainerStyle: TextStyle;
  dividerTextStyle: TextStyle;
  textButtonTextStyle: TextStyle;
  textButtonViewStyle: ViewStyle;
  linkTextStyle: TextStyle;
  paragraphMarginStyle: TextStyle;
  buttonMarginStyle: ViewStyle;
  requirementsLabelTextStyle: TextStyle;
}

const linkTextStyle: TextStyle = { color: BlueScale.dark };

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

const buttonMarginStyle: ViewStyle = {
  marginTop: VerticalMobile.Medium,
};

const checkboxMarginStyle: ViewStyle = { marginTop: VerticalMobile.Regular };

const textButtonTextStyle: TextStyle = {
  color: PurpleScale.regular,
  fontSize: 16,
  fontWeight: '500',
};

const textButtonViewStyle: ViewStyle = {
  alignSelf: 'flex-start',
  marginVertical: VerticalMobile.Big,
};

const requirementsLabelTextStyle: TextStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: 16,
  lineHeight: 28,
};

const dividerTextStyle: TextStyle = {
  backgroundColor: GreyScale.dark,
  width: '100%',
  height: 1,
  opacity: 0.3,
};

export const phoneFormStyles: IPhoneFormStyles = {
  buttonMarginStyle,
  checkboxMarginStyle,
  dividerTextStyle,
  paragraphMarginStyle,
  linkTextStyle,
  textButtonTextStyle,
  titleContainerStyle,
  textButtonViewStyle,
  requirementsLabelTextStyle,
};
