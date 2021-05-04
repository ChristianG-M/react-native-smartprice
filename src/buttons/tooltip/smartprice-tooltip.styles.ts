// Copyright 2020 Prescryptive Health, Inc.
import { ViewStyle, TextStyle } from 'react-native';
import { BlueScale } from '../../utils/types/colors';
import { currentFont } from '../../utils/types/fonts';

export interface ISmartpriceTooltipStyles {
  iconButtonViewStyle: ViewStyle;
  paragraphStyle: TextStyle;
  tooltipStyle: ViewStyle;
}

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

export const smartpriceTooltipStyles: ISmartpriceTooltipStyles = {
  iconButtonViewStyle,
  paragraphStyle,
  tooltipStyle,
};
