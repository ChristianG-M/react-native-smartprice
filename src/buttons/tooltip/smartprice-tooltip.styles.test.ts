// Copyright 2020 Prescryptive Health, Inc.

import { TextStyle, ViewStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { currentFont } from '../../utils/types/fonts';
import {
  smartpriceTooltipStyles,
  ISmartpriceTooltipStyles,
} from './smartprice-tooltip.styles';

const tooltipStyle: ViewStyle = {
  backgroundColor: BlueScale.light,
  shadowOffset: { width: 2, height: 2 },
  shadowColor: 'rgb(90, 128, 145)',
  shadowRadius: 20,
  shadowOpacity: 0.5,
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 16,
  position: 'absolute',
  bottom: 35,
  flex: 1
};

const paragraphStyle: TextStyle = {
  backgroundColor: 'transparent',
  fontSize: 16,
  lineHeight: 20,
  fontFamily: currentFont()
};

const iconButtonViewStyle: ViewStyle = { flexDirection: 'row', flex: 1 };

describe('smartpriceTooltipStyles', () => {
  it('has expected default styles', () => {
    const mockSmartpriceTooltipStyles: ISmartpriceTooltipStyles = {
      iconButtonViewStyle,
      paragraphStyle,
      tooltipStyle,
    };
    expect(smartpriceTooltipStyles).toEqual(mockSmartpriceTooltipStyles);
  });
});
