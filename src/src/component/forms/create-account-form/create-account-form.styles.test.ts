// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale, BlueScale } from '../../utils/types/colors';
import { HorizontalMobile, VerticalMobile } from '../../utils/types/spacing';
import {
  createAccountFormStyles,
  ICreateAccountFormStyles,
} from './create-account-form.styles';

const biggerVerticalMarginStyle: ViewStyle = {
  marginTop: VerticalMobile.Bigger,
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

describe('createAccountFormStyles', () => {
  it('has expected default styles', () => {
    const mockCreateAccountFormStyles: ICreateAccountFormStyles = {
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
    expect(createAccountFormStyles).toEqual(mockCreateAccountFormStyles);
  });
});
