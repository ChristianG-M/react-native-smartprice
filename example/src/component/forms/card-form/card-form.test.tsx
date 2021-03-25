// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import { cardFormStyles } from './card-form.styles';
import { CardForm } from './card-form';
import { GreyScale, PurpleScale } from '../../utils/types/colors';

// Copyright 2021 Prescryptive Health, Inc.
describe('CardForm', () => {
  it('has expected properties and styles', () => {
    const testRenderer = renderer.create(<CardForm />);
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    const titleContainer = container.props.children[0];
    expect(titleContainer.props.style).toBe(cardFormStyles.titleContainerStyle);
    const pararaphMarginContainer = container.props.children[1];
    expect(pararaphMarginContainer.props.style).toBe(
      cardFormStyles.paragraphMarginStyle
    );
    const cardMarginContainer = container.props.children[2];
    expect(cardMarginContainer.props.style).toBe(
      cardFormStyles.cardMarginStyle
    );
    const subContainer = container.props.children[3];
    const subtitleText = subContainer.props.children[0];
    const messageText = subContainer.props.children[1];
    expect(subtitleText.props.style).toBe(cardFormStyles.subtitleTextStyle);
    expect(messageText.props.style).toBe(cardFormStyles.messageTextStyle);

    const buttonContainer = container.props.children[4];
    expect(buttonContainer.props.style).toEqual(
      cardFormStyles.buttonMarginStyle
    );
    const button = buttonContainer.props.children;
    expect(button.props.backgroundColor).toEqual(PurpleScale.regular);
    expect(button.props.color).toEqual(GreyScale.white);
  });
});
