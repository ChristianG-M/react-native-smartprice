// Copyright 2020 Prescryptive Health, Inc.

import React from 'react';
import { View, ViewStyle } from 'react-native';
import renderer from 'react-test-renderer';
import { Checkbox } from './checkbox';
import { checkboxStyles, ICheckboxStyles } from './checkbox.styles';
import { useCurrentTheme } from '../../utils/hooks/use-current-theme/use-current-theme.hook';
import { SmartPriceIconButton } from '../../buttons/icon-button/icon-button';
import { CheckboxOnIcon } from '../../icons/checkbox-on-icon/checkbox-on-icon';
import { CheckboxOffIcon } from '../../icons/checkbox-off-icon/checkbox-off-icon';

jest.mock('../../utils/hooks/use-current-theme/use-current-theme.hook');
const useCurrentThemeMock = useCurrentTheme as jest.Mock;

describe('Checkbox', () => {
  beforeEach(() => {
    useCurrentThemeMock.mockReturnValue({ styles: {} });
  });

  it('uses current style', () => {
    renderer.create(<Checkbox onChange={jest.fn()} />);
    expect(useCurrentThemeMock).toHaveBeenCalledWith(checkboxStyles);
  });

  it('sends the new checked value as a parameter to the onChange event', () => {
    const onChangeMock = jest.fn();

    const input1 = renderer.create(
      <Checkbox checked={true} onChange={onChangeMock} />
    );

    const toggleBtn1 = input1.root.findByType(SmartPriceIconButton);
    toggleBtn1.props.onPress();
    expect(onChangeMock).toHaveBeenCalledWith(false);

    const input2 = renderer.create(
      <Checkbox checked={false} onChange={onChangeMock} />
    );

    const toggleBtn2 = input2.root.findByType(SmartPriceIconButton);
    toggleBtn2.props.onPress();
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it.each([[false], [true]])('is checked (%p)', (isChecked: boolean) => {
    const input = renderer.create(
      <Checkbox onChange={jest.fn()} checked={isChecked} />
    );
    const mockCheckIcon = isChecked ? CheckboxOnIcon : CheckboxOffIcon;
    const toggleBtn = input.root.findByType(SmartPriceIconButton);
    expect(toggleBtn.props.children.type).toEqual(mockCheckIcon);
  });

  it.each([[false], [true]])(
    'renders ToggleIconButton with the correct properties (isDisabled: %p)',
    (isDisabled: boolean) => {
      const stylesMock: Partial<ICheckboxStyles> = {
        containerOffViewStyle: { width: 1 },
        containerOnViewStyle: { width: 2 },
        textStyle: { width: 3 },
        labelViewStyle: { marginLeft: 14 },
      };
      useCurrentThemeMock.mockReturnValue({ styles: stylesMock });

      const customLabelTextStyle = { width: 300 };
      const input = renderer.create(
        <Checkbox
          onChange={jest.fn()}
          checked={true}
          isDisabled={isDisabled}
          labelTextStyle={customLabelTextStyle}
          label='label'
        />
      );
      const rootView = input.root.findAllByType(View, { deep: false })[0];

      const label = rootView.props.children[1];
      expect(label.props.style).toEqual({
        marginLeft: 14,
      });
      expect(label.props.children).toEqual('label');
    }
  );

  it('renders root container with correct styles', () => {
    const customViewStyle: ViewStyle = {
      marginTop: 100,
    };

    const stylesMock: Partial<ICheckboxStyles> = {
      containerViewStyle: {
        width: 1,
      },
    };
    useCurrentThemeMock.mockReturnValue({ styles: stylesMock });

    const testRenderer = renderer.create(
      <Checkbox
        onChange={jest.fn()}
        checked={true}
        viewStyle={customViewStyle}
      />
    );

    const view = testRenderer.root.findByType(View);
    expect(view.props.style).toEqual([
      stylesMock.containerViewStyle,
      customViewStyle,
    ]);
  });
});
