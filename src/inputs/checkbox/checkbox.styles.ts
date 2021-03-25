// Copyright 2020 Prescryptive Health, Inc.

import { ViewStyle, TextStyle } from 'react-native';
import { IStyleSheetMap } from '../../utils/providers/theme/get-style-sheet';
import { FontSize } from '../../utils/types/fonts';

export interface ICheckboxStyles {
  containerOffViewStyle: ViewStyle;
  containerOnViewStyle: ViewStyle;
  containerViewStyle: ViewStyle;
  textStyle: TextStyle;
  labelViewStyle: ViewStyle;
}

const labelViewStyle: ViewStyle = { flex: 1, marginLeft: 14 };

const defaultStyleSheet: ICheckboxStyles = {
  containerOffViewStyle: {
    backgroundColor: 'transparent',
  },
  containerOnViewStyle: {
    backgroundColor: 'transparent',
  },
  containerViewStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: FontSize.default,
  },
  labelViewStyle,
};

export const checkboxStyles: IStyleSheetMap<ICheckboxStyles> = {
  default: defaultStyleSheet,
};
