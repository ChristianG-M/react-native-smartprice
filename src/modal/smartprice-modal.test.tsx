// Copyright 2020 Prescryptive Health, Inc.

import React, { useState, useEffect, useRef } from 'react';
import renderer, { act } from 'react-test-renderer';
import { SmartpriceModal } from './smartprice-modal';
import { smartpriceModalStyles } from './smartprice-modal.styles';
import { View, Animated } from 'react-native';
import { IMemberInformation } from '../api/smartprice-api';
import { SmartpriceModalHeader } from '../header/smartprice-modal-header';
import { SmartpriceFooter } from '../footer/smartprice-footer';
import { PhoneForm } from '../forms/phone-form/phone-form';
import { VerifyIdentityForm } from '../forms/verify-identity-form/verify-identity-form';
import { CreateAccountForm } from '../forms/create-account-form/create-account-form';
import { CardForm } from '../forms/card-form/card-form';

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useEffect: jest.fn(),
  useRef: jest.fn(),
  useState: jest.fn(),
  Animated: jest.fn(() => {
    return {
      timing: jest.fn(() => {
        return {
          start: jest.fn(() => true),
        };
      }),
    };
  }),
}));

jest.mock('../forms/phone-form/phone-form', () => ({
  PhoneForm: () => <div />,
}));

jest.mock('../forms/verify-identity-form/verify-identity-form', () => ({
  VerifyIdentityForm: () => <div />,
}));

jest.mock('../forms/create-account-form/create-account-form', () => ({
  CreateAccountForm: () => <div />,
}));

jest.mock('../forms/card-form/card-form', () => ({
  CardForm: () => <div />,
}));

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const useEffectMock = useEffect as jest.Mock;
const useRefMock = useRef as jest.Mock;
const useStateMock = useState as jest.Mock;
interface IStateMock {
  flowStep?: number;
  phone?: string;
  currentError?: string;
  memberInfo?: IMemberInformation;
  errorMessage?: string;
  token?: string;
  code?: string;
  isBusy?: boolean;
}

describe('SmartpriceModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useRefMock.mockReset();
    useRefMock.mockReturnValue({ current: {} });

    stateReset({});
  });

  it('has expected properties and styles', () => {
    const slideAnimMock = 0.5;

    useRefMock.mockReturnValueOnce({ current: slideAnimMock });

    const testRenderer = renderer.create(
      <SmartpriceModal
        isOpen={true}
        onClose={jest.fn()}
        viewStyle={{ flex: 1 }}
      />
    );
    const container = testRenderer.root.findAllByType(View, { deep: false })[0];
    expect(container.type).toEqual(View);
    expect(container.props.style).toEqual({ flex: 1 });

    const animatedView = container.props.children;
    expect(animatedView.type).toEqual(Animated.View);
    expect(animatedView.props.style).toEqual([
      smartpriceModalStyles.containerViewStyle,
      {
        marginTop: slideAnimMock,
      },
    ]);
    expect(animatedView.props.children[0].type).toEqual(SmartpriceModalHeader);

    const modalContent = animatedView.props.children[1];
    expect(modalContent.type).toEqual(View);
    expect(modalContent.props.style).toEqual(
      smartpriceModalStyles.scrollContainerViewStyle
    );

    const content = modalContent.props.children[0];
    expect(content.type).toEqual(View);
    expect(content.props.style).toEqual(
      smartpriceModalStyles.formContainerViewStyle
    );

    const footer = modalContent.props.children[1];
    expect(footer.type).toEqual(SmartpriceFooter);
  });

  it('has expected properties and styles', () => {
    const slideAnimMock = new Animated.Value(0.5);

    useRefMock.mockReturnValueOnce({ current: slideAnimMock });

    const onCloseMock = jest.fn();

    const testRenderer = renderer.create(
      <SmartpriceModal
        isOpen={true}
        onClose={onCloseMock}
        viewStyle={{ flex: 1 }}
      />
    );
    const header = testRenderer.root.findByType(SmartpriceModalHeader);

    expect(header.props.isBackButtonEnabled).toEqual(false);
    expect(header.props.onClose.name).toEqual('onCloseModal');
    expect(header.props.onBackButtonPressed.name).toEqual(
      'onBackButtonPressed'
    );

    void act(() => header.props.onClose());

    expect(useEffectMock).toHaveBeenCalledTimes(3);
    expect(useEffectMock.mock.calls[0][1]).toEqual([true]);
  });

  it.each([
    { step: 1, form: 'PhoneForm' },
    { step: 2, form: 'VerifyIdentityForm' },
    { step: 3, form: 'CreateAccountForm' },
    { step: 4, form: 'CardForm' },
  ])('has expected properties and styles', (data) => {
    const slideAnimMock = new Animated.Value(0.5);

    const getForm = (expectedForm: string) => {
      switch (expectedForm) {
        case 'PhoneForm':
          return PhoneForm;
        case 'VerifyIdentityForm':
          return VerifyIdentityForm;
        case 'CreateAccountForm':
          return CreateAccountForm;
        case 'CardForm':
          return CardForm;
        default:
          return PhoneForm;
      }
    };

    useRefMock.mockReturnValueOnce({ current: slideAnimMock });
    stateReset({ flowStep: data.step });

    const onCloseMock = jest.fn();

    const testRenderer = renderer.create(
      <SmartpriceModal isOpen={true} onClose={onCloseMock} />
    );
    const form = testRenderer.root.findByType(getForm(data.form));
    expect(form).toBeDefined();
  });
});

const setFlowStepMock = jest.fn();
const setRegisterPhoneNumberMock = jest.fn();
const setMemberInfoMock = jest.fn();
const setDeviceTokenMock = jest.fn();
const setVerificationCodeMock = jest.fn();
const setVerifyErrorMessageMock = jest.fn();
const setCurrentErrorMock = jest.fn();
const setIsBusyMock = jest.fn();

function stateReset(stateMock: IStateMock) {
  const flowStep = stateMock.flowStep ?? 1;
  const phone = stateMock.phone ?? '';
  const memberInfo = stateMock.memberInfo ?? {
    carrierPCN: '',
    memberId: '',
    rxBin: '',
    rxGroup: '',
    deviceToken: '',
  };
  const token = stateMock.token ?? '';
  const code = stateMock.code ?? '';
  const errorMessage = stateMock.errorMessage ?? '';
  const currentError = stateMock.currentError ?? '';
  const isBusy = stateMock.isBusy ?? false;

  setFlowStepMock.mockReset();
  setRegisterPhoneNumberMock.mockReset();
  setMemberInfoMock.mockReset();
  setDeviceTokenMock.mockReset();
  setVerificationCodeMock.mockReset();
  setVerifyErrorMessageMock.mockReset();
  setCurrentErrorMock.mockReset();
  setIsBusyMock.mockReset();

  useStateMock.mockReset();
  useStateMock
    .mockReturnValueOnce([flowStep, setFlowStepMock])
    .mockReturnValueOnce([phone, setRegisterPhoneNumberMock])
    .mockReturnValueOnce([memberInfo, setMemberInfoMock])
    .mockReturnValueOnce([token, setDeviceTokenMock])
    .mockReturnValueOnce([code, setVerificationCodeMock])
    .mockReturnValueOnce([errorMessage, setVerifyErrorMessageMock])
    .mockReturnValueOnce([currentError, setCurrentErrorMock])
    .mockReturnValueOnce([isBusy, setIsBusyMock]);
}
