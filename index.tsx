// Copyright 2021 Prescryptive Health, Inc.
import React, { FunctionComponent, useState } from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { SmartpriceButton } from './src/buttons/smartprice-button/smartprice-button';
import { SmartpriceModal } from './src/modal/smartprice-modal';
import { smartPriceStyles } from './index.styles';
import { BuildTarget, IMemberInformation } from './src/api/smartprice-api';

export interface ISmartpriceUserData {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  deviceToken?: string;
  phoneNumber?: string;
  email?: string;
}
export interface ISmartPriceProps {
  buttonLabel?: string;
  onFinishFlow?: (memberInfo?: IMemberInformation) => void;
  userData?: ISmartpriceUserData;
  getDeviceToken?: boolean;
  buildTarget?: BuildTarget;
  source?: string;
}

export const SmartPrice: FunctionComponent<ISmartPriceProps> = ({
  buttonLabel,
  onFinishFlow,
  userData,
  getDeviceToken,
  buildTarget,
  source
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
        if (px && py) {
          setPosition({ left: -px, top: -py });
        }
      });
      setIsOpen(true);
    }
  };

  const closeScreen = () => {
    setIsOpen(false);
  };

  const modalSize = () => {
    return Dimensions.get('screen');
  };

  const androidModalStyle: ViewStyle = {
    ...smartPriceStyles.containerViewStyle,
    ...visibilityStyle,
    width: modalSize().width,
    left: position?.left,
  };

  const defaultModalStyle = [
    modalSize(),
    StyleSheet.absoluteFillObject,
    smartPriceStyles.containerViewStyle,
    position,
    visibilityStyle,
  ];

  const modalStyle =
    Platform.OS === 'android' ? androidModalStyle : defaultModalStyle;

  return (
    <View
      ref={componentRef}
      renderToHardwareTextureAndroid={false}
      style={[
        smartPriceStyles.buttonWrapperViewStyle,
      ]}>
      <SmartpriceButton onPress={slideScreen} label={label} />
      <SmartpriceModal
        onClose={closeScreen}
        viewStyle={modalStyle}
        isOpen={isOpen}
        onFinishFlow={onFinishFlow}
        userData={userData}
        retrieveDeviceToken={getDeviceToken}
        buildTarget={buildTarget}
        source={source}
      />
    </View>
  );
};
