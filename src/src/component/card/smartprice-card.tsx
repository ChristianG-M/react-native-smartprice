// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, ReactElement } from 'react';
import { View, StyleProp, ViewStyle, Text } from 'react-native';
import { IMemberInformation } from '../api/smartprice-api';
import { smartpriceCardStyles } from './smartprice-card.styles';

export interface ISmartpriceCardProps {
  viewStyle?: StyleProp<ViewStyle>;
  memberInfo?: IMemberInformation;
}

export const SmartpriceCard: FunctionComponent<ISmartpriceCardProps> = ({
  viewStyle,
  memberInfo,
}): ReactElement => {
  return (
    <View style={[smartpriceCardStyles.containerViewStyle, viewStyle]}>
      <View style={smartpriceCardStyles.headerViewStyle}>
        <Text style={smartpriceCardStyles.headerTextStyle}>
          SmartPRICE™ Savings Card
        </Text>
      </View>
      <View style={smartpriceCardStyles.paddingStyle}>
        <View style={smartpriceCardStyles.marginStyle}>
          <Text style={smartpriceCardStyles.labelTextStyle}>Member ID</Text>
          <Text style={smartpriceCardStyles.memberIdTextStyle}>
            {memberInfo?.memberId}
          </Text>
        </View>
        <View style={smartpriceCardStyles.rowViewStyle}>
          <View style={smartpriceCardStyles.dataViewStyle}>
            <Text style={smartpriceCardStyles.labelTextStyle}>Group</Text>
            <Text style={smartpriceCardStyles.contentTextStyle}>
              {memberInfo?.rxGroup}
            </Text>
          </View>
          <View style={smartpriceCardStyles.dataViewStyle}>
            <Text style={smartpriceCardStyles.labelTextStyle}>BIN</Text>
            <Text style={smartpriceCardStyles.contentTextStyle}>
              {memberInfo?.rxBin}
            </Text>
          </View>
          <View>
            <Text style={smartpriceCardStyles.labelTextStyle}>PCN</Text>
            <Text style={smartpriceCardStyles.contentTextStyle}>
              {memberInfo?.carrierPCN}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
