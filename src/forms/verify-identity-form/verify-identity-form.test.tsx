// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { VerifyIdentityForm } from './verify-identity-form';
import { verifyIdentityFormStyles } from './verify-identity-form.styles';
import { View, Text } from 'react-native';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { SmartpriceTextButton } from '../../buttons/text-button/smartprice-text-button';
import { GreyScale, PurpleScale } from '../../utils/types/colors';

describe('VerifyIdentityForm', () => {
  it('component has expected props', () => {
    const testRenderer = renderer.create(<VerifyIdentityForm phoneNumber='' />);
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.props.style).toEqual(undefined);

    const title = container.props.children[0];
    expect(title.type).toEqual(Text);
    expect(title.props.style).toEqual(
      verifyIdentityFormStyles.titleContainerStyle
    );
    expect(title.props.children).toEqual('Verify identity');

    const subtitle = container.props.children[1];
    expect(subtitle.type).toEqual(Text);
    expect(subtitle.props.style).toEqual(
      verifyIdentityFormStyles.paragraphMarginStyle
    );
    expect(subtitle.props.children).toEqual(
      'Please enter the code sent to your mobile phone.'
    );

    const codeInput = container.props.children[2];
    expect(codeInput.props.maxLength).toEqual(6);
    expect(codeInput.props.value).toEqual('');
    expect(codeInput.props.onChangeText).toBeDefined();
    expect(codeInput.props.errorMessage).toEqual(undefined);

    const buttonContainer = container.props.children[3];
    expect(buttonContainer.type).toEqual(View);
    expect(buttonContainer.props.style).toEqual(
      verifyIdentityFormStyles.buttonMarginStyle
    );
    expect(buttonContainer.props.children.type).toEqual(SmartpriceButton);

    const resendCode = container.props.children[4];
    expect(resendCode.type).toEqual(View);
    expect(resendCode.props.children.type).toEqual(Text);
    expect(resendCode.props.children.props.style).toEqual(
      verifyIdentityFormStyles.receiveCodeTextStyle
    );
    expect(resendCode.props.children.props.children[0].trim()).toEqual(
      'Didn’t receive your code?'
    );
    expect(resendCode.props.children.props.children[1].type).toBe(Text);
    expect(resendCode.props.children.props.children[1].props.style).toEqual(
      verifyIdentityFormStyles.textButtonViewStyle
    );
    expect(
      resendCode.props.children.props.children[1].props.children.type
    ).toEqual(SmartpriceTextButton);
  });

  it('has SmartpriceTextButton with correct props', () => {
    const testRenderer = renderer.create(<VerifyIdentityForm phoneNumber='' />);
    const button = testRenderer.root.findByType(SmartpriceTextButton);
    expect(button.props.label).toEqual('Resend code');
    expect(button.props.onPress.name).toEqual('resendCode');
  });

  it('has SmartpriceButton with correct props', () => {
    const testRenderer = renderer.create(<VerifyIdentityForm phoneNumber='' />);
    const button = testRenderer.root.findByType(SmartpriceButton);
    expect(button.props.label).toEqual('Next');
    expect(button.props.onPress.name).toEqual('onNextPressed');
    expect(button.props.backgroundColor).toEqual(PurpleScale.regular);
    expect(button.props.color).toEqual(GreyScale.white);
    expect(button.props.isDisabled).toEqual(true);
  });

  it('component has expected props', () => {
    const testRenderer = renderer.create(<VerifyIdentityForm phoneNumber='' />);
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.props.style).toEqual(undefined);
  });
});
