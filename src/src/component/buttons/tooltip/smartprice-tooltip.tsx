// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, ReactElement, useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  TouchableHighlight,
} from 'react-native';
import { HelpIcon } from '../../icons/help-icon/help-icon';
import { SmartPriceIconButton } from '../icon-button/icon-button';
import { smartpriceTooltipStyles } from './smartprice-tooltip.styles';

export interface ISmartpriceTooltipProps {
  viewStyle?: StyleProp<ViewStyle>;
}

export const SmartpriceTooltip: FunctionComponent<ISmartpriceTooltipProps> = ({
  viewStyle,
}): ReactElement => {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const tooltipViewStyle: ViewStyle = tooltipVisible
    ? { display: 'flex' }
    : { display: 'none' };

  return (
    <View style={viewStyle}>
      <TouchableHighlight
        style={[smartpriceTooltipStyles.tooltipStyle, tooltipViewStyle]}
        onPress={hideTooltip}
      >
        <Text style={smartpriceTooltipStyles.paragraphStyle}>
          You need to be under 65 and not be a part of any government funded
          healthcare program to be elegible.
        </Text>
      </TouchableHighlight>
      <SmartPriceIconButton
        onPress={toggleTooltip}
        viewStyle={smartpriceTooltipStyles.iconButtonViewStyle}
      >
        <HelpIcon />
        <Text>Am I elegible?</Text>
      </SmartPriceIconButton>
    </View>
  );
};
