// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale } from '../../utils/types/colors';
import { VerticalMobile } from '../../utils/types/spacing';
import {
  verifyIdentityFormStyles,
  IVerifyIdentityFormStyles,
} from './verify-identity-form.styles';

const containerViewStyle: ViewStyle = {
  height: '90vh',
  marginTop: '10vh',
  backgroundColor: 'white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const headerViewStyle: ViewStyle = {
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const phoneInputTextStyle: TextStyle = {
  height: 40,
  backgroundColor: '#F5F5FA',
  borderWidth: 0,
  borderRadius: 4,
  paddingHorizontal: 16,
  marginVertical: 8,
};

const closeButtonTextStyle: TextStyle = {
  color: '#007AFF',
  fontSize: 17,
  paddingVertical: 10,
  fontWeight: '400',
  marginTop: 10,
};

const footerViewStyle: ViewStyle = {
  flexDirection: 'row',
  height: 80,
  marginTop: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const footerButtonsViewStyle: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 80,
  paddingLeft: 10,
};

const mediumLinkTextStyle: TextStyle = { fontSize: 14 };

const smallLinkTextStyle: TextStyle = {
  color: '#00A3D9',
  fontSize: 12,
  fontWeight: '500',
};

const dividerTextStyle: TextStyle = {
  backgroundColor: GreyScale.dark,
  width: '100%',
  height: 1,
  opacity: 0.3,
  marginVertical: 32,
};

const centeredRowViewStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const messageContainerViewStyle: ViewStyle = {
  alignItems: 'flex-start',
  marginTop: -12,
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

const buttonMarginStyle: ViewStyle = {
  marginTop: VerticalMobile.Medium,
  marginBottom: VerticalMobile.Big,
};

const receiveCodeTextStyle: TextStyle = { fontSize: 16 };

const textButtonViewStyle: ViewStyle = { marginLeft: 8 };

describe('verifyIdentityFormStyles', () => {
  it('has expected default styles', () => {
    const mockVerifyIdentityFormStyles: IVerifyIdentityFormStyles = {
      centeredRowViewStyle,
      closeButtonTextStyle,
      containerViewStyle,
      dividerTextStyle,
      footerViewStyle,
      footerButtonsViewStyle,
      headerViewStyle,
      mediumLinkTextStyle,
      messageContainerViewStyle,
      phoneInputTextStyle,
      smallLinkTextStyle,
      receiveCodeTextStyle,
      buttonMarginStyle,
      paragraphMarginStyle,
      titleContainerStyle,
      textButtonViewStyle,
    };
    expect(verifyIdentityFormStyles).toEqual(mockVerifyIdentityFormStyles);
  });
});
