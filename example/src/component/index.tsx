// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState } from 'react';
import { View, ViewStyle, StyleSheet, Dimensions } from 'react-native';
import { SmartpriceButton } from './buttons/smartprice-button/smartprice-button';
import { SmartpriceModal } from './modal/smartprice-modal';
import { smartPriceStyles } from './index.styles';

export interface ISmartPriceProps {
  buttonLabel?: string;
  onContinueFlow?: () => void;
}

export interface ISmartpriceUserData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export const SmartPrice: FunctionComponent<ISmartPriceProps> = ({
  buttonLabel,
  onContinueFlow,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<ViewStyle>();
  const componentRef = React.createRef<View>();

  const label = buttonLabel ?? 'Get the SmartPRICE™';

  const visibilityStyle: ViewStyle = isOpen
    ? { display: 'flex' }
    : { display: 'none' };

  const slideScreen = () => {
    if (componentRef.current) {
      componentRef.current.measure((_fx, _fy, _width, _height, px, py) => {
        setPosition({ left: -px, top: -py });
      });
      setIsOpen(true);
    }
  };

  const closeScreen = () => {
    setIsOpen(false);
  };

  const modalSize = () => {
    return Dimensions.get('window');
  };

  const modalStyle = [
    modalSize(),
    StyleSheet.absoluteFillObject,
    smartPriceStyles.containerViewStyle,
    position,
    visibilityStyle,
  ];

  return (
    <View ref={componentRef} style={smartPriceStyles.buttonWrapperViewStyle}>
      <SmartpriceButton onPress={slideScreen} label={label} />
      <SmartpriceModal
        onClose={closeScreen}
        viewStyle={modalStyle}
        isOpen={isOpen}
        onContinueFlow={onContinueFlow}
      />
    </View>
  );
};