// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import renderer, { ReactTestInstance } from 'react-test-renderer';
import { SmartpriceCard } from './smartprice-card';
import { smartpriceCardStyles } from './smartprice-card.styles';
import { View, Text } from 'react-native';
import { IMemberInformation } from '../api/smartprice-api';

const mockMemberInfo: IMemberInformation = {
  memberId: 'Member',
  rxBin: '12',
  rxGroup: '21',
  carrierPCN: 'carrier',
};

describe('SmartpriceCard', () => {
  it('has expected properties and styles', () => {
    const mockStyle = { flex: 1 };
    const testRenderer = renderer.create(
      <SmartpriceCard viewStyle={mockStyle} memberInfo={mockMemberInfo} />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    expect(container.props.style).toEqual([
      smartpriceCardStyles.containerViewStyle,
      mockStyle,
    ]);

    const header = container.props.children[0];

    expect(header.type).toEqual(View);
    expect(header.props.style).toEqual(smartpriceCardStyles.headerViewStyle);
    expect(header.props.children.type).toEqual(Text);
    expect(header.props.children.props.style).toEqual(
      smartpriceCardStyles.headerTextStyle
    );
    expect(header.props.children.props.children).toEqual(
      'SmartPRICE™ Savings Card'
    );

    const content = container.props.children[1];
    expect(content.type).toEqual(View);
    expect(content.props.style).toEqual(smartpriceCardStyles.paddingStyle);

    const contentFirstRow = content.props.children[0];
    expect(contentFirstRow.type).toEqual(View);
    expect(contentFirstRow.props.style).toEqual(
      smartpriceCardStyles.marginStyle
    );
    expect(contentFirstRow.props.children[0].type).toEqual(Text);
    expect(contentFirstRow.props.children[0].props.style).toEqual(
      smartpriceCardStyles.labelTextStyle
    );
    expect(contentFirstRow.props.children[0].props.children).toEqual(
      'Member ID'
    );

    expect(contentFirstRow.props.children[1].type).toEqual(Text);
    expect(contentFirstRow.props.children[1].props.children).toEqual(
      mockMemberInfo.memberId
    );

    const contentSecondRow = content.props.children[1];
    expect(contentSecondRow.type).toEqual(View);
    expect(contentSecondRow.props.style).toEqual(
      smartpriceCardStyles.rowViewStyle
    );
    contentSecondRow.props.children.forEach(
      (el: ReactTestInstance, index: number) => {
        const labelText = index === 0 ? 'Group' : index === 1 ? 'BIN' : 'PCN';
        const dataText =
          index === 0
            ? mockMemberInfo.rxGroup
            : index === 1
            ? mockMemberInfo.rxBin
            : mockMemberInfo.carrierPCN;

        expect(el.type).toEqual(View);
        expect(el.props.style).toEqual(
          index !== 2 ? smartpriceCardStyles.dataViewStyle : undefined
        );

        const label = el.props.children[0];
        const data = el.props.children[1];

        expect(label.type).toEqual(Text);
        expect(label.props.style).toEqual(smartpriceCardStyles.labelTextStyle);
        expect(label.props.children).toEqual(labelText);

        expect(data.type).toEqual(Text);
        expect(data.props.style).toEqual(smartpriceCardStyles.contentTextStyle);
        expect(data.props.children).toEqual(dataText);
      }
    );
  });
});
