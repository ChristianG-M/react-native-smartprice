// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartpriceModalHeader } from './smartprice-modal-header';
import { smartpriceModalHeaderStyles } from './smartprice-modal-header.styles';
import { View } from 'react-native';
import { SmartPriceIconButton } from '../buttons/icon-button/icon-button';
import { ArrowIcon } from '../icons/arrow-icon/arrow-icon';
import { PurpleScale } from '../utils/types/colors';
import { PrescryptiveBrand } from '../icons/prescryptive-brand/prescryptive-brand';
import { CloseIcon } from '../icons/close-icon/close-icon';
import { ProgressBar } from '../progress-bar/progress-bar';

describe('SmartpriceModalHeader', () => {
  it('has expected properties and styles', () => {
    const onMockButtonPressed = jest.fn();
    const testRenderer = renderer.create(
      <SmartpriceModalHeader
        onClose={jest.fn()}
        onBackButtonPressed={onMockButtonPressed}
        isBackButtonEnabled={true}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    expect(container.props.style).toEqual([
      smartpriceModalHeaderStyles.headerViewStyle,
      undefined,
    ]);
  });

  it('has expected back button properties and styles', () => {
    const onMockButtonPressed = jest.fn();
    const testRenderer = renderer.create(
      <SmartpriceModalHeader
        onClose={jest.fn()}
        onBackButtonPressed={onMockButtonPressed}
        isBackButtonEnabled={true}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    const backButton = container.props.children[0];

    expect(backButton.type).toEqual(View);
    expect(backButton.props.style).toEqual(
      smartpriceModalHeaderStyles.leftIconContainerViewStyle
    );

    const iconButton = backButton.props.children;
    expect(iconButton.type).toEqual(SmartPriceIconButton);
    expect(iconButton.props.viewStyle).toEqual(
      smartpriceModalHeaderStyles.iconViewStyle
    );
    expect(iconButton.props.onPress).toEqual(onMockButtonPressed);
    expect(iconButton.props.children.type).toEqual(ArrowIcon);
    expect(iconButton.props.children.props.direction).toEqual('left');
    expect(iconButton.props.children.props.color).toEqual(PurpleScale.regular);
  });

  it('has expected brand properties and styles', () => {
    const onMockButtonPressed = jest.fn();
    const testRenderer = renderer.create(
      <SmartpriceModalHeader
        onClose={jest.fn()}
        onBackButtonPressed={onMockButtonPressed}
        isBackButtonEnabled={true}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    const brandContainer = container.props.children[1];

    expect(brandContainer.type).toEqual(View);
    expect(brandContainer.props.style).toEqual(
      smartpriceModalHeaderStyles.brandContainerStyle
    );
    const brand = brandContainer.props.children;
    expect(brand.type).toEqual(PrescryptiveBrand);
  });

  it('has expected close button properties and styles', () => {
    const onCloseMockButtonPressed = jest.fn();
    const testRenderer = renderer.create(
      <SmartpriceModalHeader
        onClose={onCloseMockButtonPressed}
        onBackButtonPressed={jest.fn()}
        isBackButtonEnabled={true}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    const rightContainer = container.props.children[2];

    expect(rightContainer.type).toEqual(View);
    expect(rightContainer.props.style).toEqual(
      smartpriceModalHeaderStyles.rightIconContainerViewStyle
    );

    const closeButton = rightContainer.props.children;

    expect(closeButton.type).toEqual(SmartPriceIconButton);
    expect(closeButton.props.viewStyle).toEqual(
      smartpriceModalHeaderStyles.iconViewStyle
    );
    expect(closeButton.props.onPress).toEqual(onCloseMockButtonPressed);
    expect(closeButton.props.children.type).toEqual(CloseIcon);

    const progressBar = container.props.children[3];

    expect(progressBar.type).toEqual(ProgressBar);
    expect(progressBar.props.step).toEqual(1);
    expect(progressBar.props.totalSteps).toEqual(4);
    expect(progressBar.props.width).toEqual(2);
  });
});
