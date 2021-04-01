// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { GreyScale } from '../../utils/types/colors';
import { VerticalMobile } from '../../utils/types/spacing';
import { cardFormStyles, ICardFormStylesStyles } from './card-form.styles';

const titleContainerStyle: TextStyle = {
  color: GreyScale.black,
  fontSize: 22,
  textAlign: 'left',
  fontWeight: '700',
  margin: 0,
};

const paragraphMarginStyle: TextStyle = {
  marginTop: VerticalMobile.Regular,
  marginBottom: VerticalMobile.Medium,
  fontSize: 16,
};

const cardMarginStyle: ViewStyle = {
  marginBottom: VerticalMobile.Big,
};

const buttonMarginStyle: ViewStyle = {
  marginTop: VerticalMobile.Medium,
  marginBottom: VerticalMobile.Big,
};

const messageTextStyle: TextStyle = { fontSize: 16, fontWeight: '400' };

const subtitleTextStyle: TextStyle = {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: VerticalMobile.Regular,
};

describe('cardFormStyles', () => {
  it('has expected default styles', () => {
    const mockCardFormStyles: ICardFormStylesStyles = {
      buttonMarginStyle,
      cardMarginStyle,
      messageTextStyle,
      subtitleTextStyle,
      titleContainerStyle,
      paragraphMarginStyle,
    };
    expect(cardFormStyles).toEqual(mockCardFormStyles);
  });
});
