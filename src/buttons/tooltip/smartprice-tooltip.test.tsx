// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer from 'react-test-renderer';
import { SmartpriceTooltip } from './smartprice-tooltip';
import { smartpriceTooltipStyles } from './smartprice-tooltip.styles';
import { Text, View, TouchableHighlight } from 'react-native';
import { SmartPriceIconButton } from '../icon-button/icon-button';
import { HelpIcon } from '../../icons/help-icon/help-icon';

describe('SmartpriceTooltip', () => {
  it('has expected styles', () => {
    const mockViewStyle = { flex: 1 };
    const mockLabel = `You need to be under 65 and not be a part of any government funded healthcare program to be elegible.`;
    const testRenderer = renderer.create(
      <SmartpriceTooltip viewStyle={mockViewStyle} />
    );

    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.props.style).toEqual(mockViewStyle);

    const touchableHighlight = testRenderer.root.findByType(TouchableHighlight);
    expect(touchableHighlight.props.style).toEqual([
      smartpriceTooltipStyles.tooltipStyle,
      { display: 'none' },
    ]);

    expect(touchableHighlight.props.onPress.name).toEqual('hideTooltip');

    expect(touchableHighlight.props.children.type).toEqual(Text);
    expect(touchableHighlight.props.children.props.style).toEqual(
      smartpriceTooltipStyles.paragraphStyle
    );
    expect(touchableHighlight.props.children.props.children).toEqual(mockLabel);

    const iconButton = testRenderer.root.findByType(SmartPriceIconButton);
    expect(iconButton.props.onPress.name).toEqual('toggleTooltip');
    expect(iconButton.props.viewStyle).toEqual(
      smartpriceTooltipStyles.iconButtonViewStyle
    );
    expect(iconButton.props.children[0].type).toEqual(HelpIcon);
    expect(iconButton.props.children[1].type).toEqual(Text);
    expect(iconButton.props.children[1].props.children).toEqual(
      'Am I elegible?'
    );
  });
});
