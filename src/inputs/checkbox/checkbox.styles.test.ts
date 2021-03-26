// Copyright 2020 Prescryptive Health, Inc.

import { FontSize } from '../../utils/types/fonts';
import { checkboxStyles, ICheckboxStyles } from './checkbox.styles';

describe('checkboxStyles', () => {
  it('has expected default styles', () => {
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
      labelViewStyle: { flex: 1, marginLeft: 14 },
    };

    expect(checkboxStyles.default).toEqual(defaultStyleSheet);
  });

  it('has expected themes', () => {
    const themes = checkboxStyles.themes ?? new Map();

    expect(Array.from(themes).length).toEqual(0);
  });
});
