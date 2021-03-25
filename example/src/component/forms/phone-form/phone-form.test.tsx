// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { PhoneForm } from './phone-form';
import { phoneFormStyles } from './phone-form.styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { PhoneMaskInput } from '../../inputs/mask-inputs/phone-mask-input/phone-mask-input';
import { Checkbox } from '../../inputs/checkbox/checkbox';
import { SmartpriceButton } from '../../buttons/smartprice-button/smartprice-button';
import { SmartpriceTextButton } from '../../buttons/text-button/smartprice-text-button';
import { GreyScale, PurpleScale } from '../../utils/types/colors';

describe('PhoneForm', () => {
  // it('Checkbox has expected props', () => {
  //   const testRenderer = renderer.create(<PhoneForm />);
  //   const checkbox = testRenderer.root.findByType(Checkbox);
  //   expect(checkbox.props.onChange.name).toEqual('onChecked');

  //   const label = checkbox.props.label;
  //   expect(label.type).toEqual(Text);
  //   expect(label.props.style).toEqual(
  //     phoneFormStyles.requirementsLabelTextStyle
  //   );
  //   expect(label.props.children[0]).toEqual('I have read and agree to:');
  //   expect(label.props.children[1].type).toEqual(TouchableOpacity);
  //   expect(label.props.children[1].props.onPress.name).toEqual(
  //     'onSmartPriceTermsAndConditions'
  //   );
  //   expect(label.props.children[1].props.children.type).toEqual(Text);
  //   expect(label.props.children[1].props.children.props.style).toEqual(
  //     phoneFormStyles.linkTextStyle
  //   );
  //   expect(label.props.children[1].props.children.props.children).toEqual(
  //     'SmartPrice Terms & Conditions'
  //   );

  //   expect(label.props.children[2].type).toEqual(TouchableOpacity);
  //   expect(label.props.children[2].props.onPress.name).toEqual(
  //     'onPrescryptiveTermsAndConditions'
  //   );
  //   expect(label.props.children[2].props.children.type).toEqual(Text);
  //   expect(label.props.children[2].props.children.props.style).toEqual(
  //     phoneFormStyles.linkTextStyle
  //   );
  //   expect(label.props.children[2].props.children.props.children).toEqual(
  //     'Prescryptive Terms & Conditions'
  //   );
  // });

  it('phone input changes phone number', () => {
    const testRenderer = renderer.create(<PhoneForm />);
    const maskInput = testRenderer.root.findByType(PhoneMaskInput);
    expect(maskInput.props.phoneNumber).toEqual('');

    void act(() => {
      maskInput.props.onPhoneNumberChange('1234567890');
    });

    expect(maskInput.props.phoneNumber).toEqual('1234567890');
  });

  it('Learn about button has expected props', () => {
    const testRenderer = renderer.create(<PhoneForm />);
    const learnButton = testRenderer.root.findByType(SmartpriceTextButton);
    expect(learnButton.props.onPress.name).toEqual('learnAbout');
    expect(learnButton.props.label).toEqual('Learn about Prescryptive');
  });

  it('Next button has expected props', () => {
    const testRenderer = renderer.create(<PhoneForm />);
    const nextButton = testRenderer.root.findByType(SmartpriceButton);
    expect(nextButton.props.onPress.name).toEqual('onNextPressed');
    expect(nextButton.props.label).toEqual('Next');
    expect(nextButton.props.backgroundColor).toEqual(PurpleScale.regular);
    expect(nextButton.props.color).toEqual(GreyScale.white);
    expect(nextButton.props.isDisabled).toEqual(true);
  });

  it('has expected properties and styles', () => {
    const mockStyle = { flex: 1 };
    const mockonVerificationCodeRequest = jest.fn((phone) => phone);
    const mockErrorMessage = 'mock error message';
    const testRenderer = renderer.create(
      <PhoneForm
        viewStyle={mockStyle}
        onVerificationCodeRequest={mockonVerificationCodeRequest}
        errorMessage={mockErrorMessage}
      />
    );

    const mainContainer = testRenderer.root.findAllByType(View, {
      deep: false,
    })[0];
    expect(mainContainer.props.style).toEqual(mockStyle);

    const title = mainContainer.props.children[0];
    expect(title.type).toEqual(Text);
    expect(title.props.style).toEqual(phoneFormStyles.titleContainerStyle);

    const firstParagraph = mainContainer.props.children[1];
    expect(firstParagraph.type).toEqual(Text);
    expect(firstParagraph.props.style).toEqual(
      phoneFormStyles.paragraphMarginStyle
    );

    const phoneInput = mainContainer.props.children[2];
    expect(phoneInput.type).toEqual(PhoneMaskInput);
    expect(phoneInput.props.onPhoneNumberChange.name).toEqual(
      'onPhoneNumberChange'
    );
    expect(phoneInput.props.phoneNumber).toEqual('');
    expect(phoneInput.props.errorMessage).toEqual(mockErrorMessage);

    const checkboxContainer = mainContainer.props.children[3];
    expect(checkboxContainer.type).toEqual(View);
    expect(checkboxContainer.props.style).toEqual(
      phoneFormStyles.checkboxMarginStyle
    );
    expect(checkboxContainer.props.children.type).toEqual(Checkbox);

    const nextButtonContainer = mainContainer.props.children[4];
    expect(nextButtonContainer.type).toEqual(View);
    expect(nextButtonContainer.props.style).toEqual(
      phoneFormStyles.buttonMarginStyle
    );
    expect(nextButtonContainer.props.children.type).toEqual(SmartpriceButton);

    const secondParagraph = mainContainer.props.children[5];
    expect(secondParagraph.type).toEqual(Text);
    expect(secondParagraph.props.style).toEqual(
      phoneFormStyles.paragraphMarginStyle
    );
    expect(secondParagraph.props.children).toEqual(
      'We will send you a text message to verify your identity.'
    );

    const divider = mainContainer.props.children[6];
    expect(divider.type).toEqual(View);
    expect(divider.props.style).toEqual(phoneFormStyles.dividerTextStyle);

    const learnButton = mainContainer.props.children[7];
    expect(learnButton.type).toEqual(SmartpriceTextButton);
    expect(learnButton.props.viewStyle).toEqual(
      phoneFormStyles.textButtonViewStyle
    );
    expect(learnButton.props.textStyle).toEqual(
      phoneFormStyles.textButtonTextStyle
    );
  });
});
