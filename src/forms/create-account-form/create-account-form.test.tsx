// Copyright 2021 Prescryptive Health, Inc.
// Copyright 2021 Prescryptive Health, Inc.
import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';
import { CreateAccountForm } from './create-account-form';
import { createAccountFormStyles } from './create-account-form.styles';
import { GreyScale, PurpleScale } from '../../utils/types/colors';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';

describe('CardForm', () => {
  it('has expected properties and styles', () => {
    const testRenderer = renderer.create(<CreateAccountForm/>);
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);

    const titleContainer = container.props.children[0];
    expect(titleContainer.props.style).toBe(
      createAccountFormStyles.titleContainerStyle
    );
    const pararaphMarginContainer = container.props.children[1];
    expect(pararaphMarginContainer.props.style).toBe(
      createAccountFormStyles.paragraphMarginStyle
    );
    const formContainer = container.props.children[3];
    const createForm = formContainer.props.children[0];
    expect(createForm.props.style).toBe(
      createAccountFormStyles.formRowViewStyle
    );
    const firstName = createForm.props.children[0];
    expect(firstName.props.containerStyle).toBe(
      createAccountFormStyles.twoColumnInputViewStyle
    );
    expect(firstName.props.placeholder).toBe('First name');
    const lastName = createForm.props.children[1];
    expect(lastName.props.containerStyle).toBe(
      createAccountFormStyles.twoColumnInputViewStyle
    );
    expect(lastName.props.placeholder).toBe('Last name');
    const emailContainer = formContainer.props.children[1];
    const email = emailContainer.props.children;
    expect(email.props.placeholder).toBe('Email address');

    const rowContainer = formContainer.props.children[2];
    expect(rowContainer.props.style).toBe(
      [createAccountFormStyles.formRowViewStyle, {}]
    );
    const dateMask = rowContainer.props.children[0];
    expect(dateMask.props.errorMessageStyle).toBe(
      createAccountFormStyles.twoColumnErrorViewStyle
    );
    expect(dateMask.props.viewStyle).toBe(
      createAccountFormStyles.twoColumnInputViewStyle
    );
    const baseInput = rowContainer.props.children[1];
    expect(baseInput.props.containerStyle).toBe(
      createAccountFormStyles.twoColumnInputViewStyle
    );
    const verticalMarginContainer = container.props.children[4];
    expect(verticalMarginContainer.props.style).toBe(
      createAccountFormStyles.biggerVerticalMarginStyle
    );
    const verifyErrorMessage = formContainer.props.children[3];
    expect(verifyErrorMessage.type).toBe(Text);
    expect(verifyErrorMessage.props.style).toBe(
      createAccountFormStyles.errorTextStyle
    );
    const button = verticalMarginContainer.props.children;
    expect(button.type).toEqual(SmartpriceButton);
    expect(button.props.backgroundColor).toEqual(PurpleScale.regular);
    expect(button.props.color).toEqual(GreyScale.white);
  });
});
