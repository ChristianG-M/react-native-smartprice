// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartpriceFooter } from './smartprice-footer';
import { smartpriceFooterStyles } from './smartprice-footer.styles';
import { View } from 'react-native';
import { SmartpriceTextButton } from '../buttons/text-button/smartprice-text-button';

describe('SmartpriceFooter', () => {
  it('has expected properties and styles', () => {
    const testRenderer = renderer.create(<SmartpriceFooter />);
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    expect(container.props.style).toEqual(
      smartpriceFooterStyles.footerViewStyle
    );

    const faqLink = container.props.children[0];

    expect(faqLink.type).toEqual(SmartpriceTextButton);
    expect(faqLink.props.textStyle).toEqual(
      smartpriceFooterStyles.mediumLinkTextStyle
    );
    expect(faqLink.props.label).toEqual('Prescryptive FAQ');
    expect(faqLink.props.onPress).toBeDefined();

    const policyLink = container.props.children[1];

    expect(policyLink.type).toEqual(SmartpriceTextButton);
    expect(policyLink.props.textStyle).toEqual(
      smartpriceFooterStyles.mediumLinkTextStyle
    );
    expect(policyLink.props.label).toEqual('Privacy Policy');
    expect(policyLink.props.onPress).toBeDefined();
  });
});
