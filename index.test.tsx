// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { SmartPrice } from './index';
import { smartPriceStyles } from './index.styles';
import { View, StyleSheet } from 'react-native';
import { SmartpriceButton } from './src/buttons/smartprice-button/smartprice-button';
import { SmartpriceModal } from './src/modal/smartprice-modal';

jest.mock('./src/modal/smartprice-modal', () => {
  return {
    SmartpriceModal: jest.fn().mockImplementation(({ viewStyle }) => {
      return <div style={viewStyle} />;
    }),
  };
});

describe('SmartPrice', () => {
  it('has expected styles', () => {
    const testRenderer = renderer.create(<SmartPrice />);
    const input = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(input.props.style).toBe(smartPriceStyles.buttonWrapperViewStyle);
  });

  it('has SmartpriceButton', () => {
    const testRenderer = renderer.create(<SmartPrice />);
    const button = testRenderer.root.findAllByType(SmartpriceButton, {
      deep: false,
    })[0];
    expect(button.props.label).toEqual('Get the SmartPRICE™');
    expect(button.props.onPress).toBeDefined();
  });

  it('has SmartpriceModal', () => {
    const testRenderer = renderer.create(<SmartPrice />);
    const modal = testRenderer.root.findByType(SmartpriceModal);

    const mockStyle = [
      { fontScale: 2, height: 1334, scale: 2, width: 750 },
      StyleSheet.absoluteFillObject,
      smartPriceStyles.containerViewStyle,
      undefined,
      { display: 'none' },
    ];
    expect(modal.props.isOpen).toEqual(false);
    expect(modal.props.onClose).toBeDefined();
    expect(modal.props.viewStyle).toEqual(mockStyle);
  });

  it('opens modal on press', () => {
    const testRenderer = renderer.create(<SmartPrice />);
    const button = testRenderer.root.findAllByType(SmartpriceButton, {
      deep: false,
    })[0];

    const modal = testRenderer.root.findByType(SmartpriceModal);

    expect(modal.props.isOpen).toEqual(false);

    void act(() => {
      button.props.onPress();
    });

    expect(modal.props.isOpen).toEqual(true);
  });
});
