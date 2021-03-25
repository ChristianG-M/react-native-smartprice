// Copyright 2021 Prescryptive Health, Inc.
import axios from 'axios';
import { getDateOfBirth } from '../utils/parsers/date-parser';
import { getPhoneNumber } from '../utils/parsers/phone-parser';
import {
  getDeviceToken,
  getMemberInformation,
  isRegisteredUser,
  registerAppUser,
  registerUser,
  sendVerificationCodeRequest,
} from './smartprice-api';

const getDateOfBirthMock = getDateOfBirth as jest.Mock;
const getPhoneNumberMock = getPhoneNumber as jest.Mock;
const axiosMock = axios as jest.Mocked<typeof axios>;

jest.mock('expo-constants', () => {
  return { manifest: { extra: { target: 'prod' } } };
});

jest.mock('../utils/parsers/date-parser');
jest.mock('../utils/parsers/date-parser');
jest.mock('../utils/parsers/phone-parser');
jest.mock('axios');

describe('SDK can', () => {
  beforeEach(() => {
    getPhoneNumberMock.mockReset();
    getDateOfBirthMock.mockReset();
  });
  it('fetches the verify phone code in test env', async () => {
    const phoneNumberMock = '1234567890';
    getPhoneNumberMock.mockReturnValueOnce('+1' + phoneNumberMock);
    const code = { data: 43211 };
    axiosMock.post.mockImplementation(() => Promise.resolve(code));

    const result = await sendVerificationCodeRequest(phoneNumberMock, 'test');
    expect(result).toEqual(code.data);
    expect(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      axiosMock.post
    ).toHaveBeenCalledWith(
      `https://test.myrx.io/api/v1/one-time-password/send`,
      { phoneNumber: '+11234567890' }
    );
  });

  it('registerUser at API in test env', async () => {
    const phoneNumberMock = '1234567890';
    getPhoneNumberMock.mockReturnValueOnce('+1' + phoneNumberMock);
    getDateOfBirthMock.mockReturnValueOnce(new Date('2000-08-22'));
    const form = {
      firstName: 'John',
      lastName: 'Perez',
      email: 'jonh@email.com',
      dateOfBirth: '2000-08-22',
      phoneNumber: '1234567890',
      verifyCode: '24122',
    };
    const memberId = { data: 43211 };

    axiosMock.post.mockImplementationOnce(() => Promise.resolve(memberId));

    await expect(registerUser(form, 'test')).resolves.toEqual(memberId.data);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axiosMock.post).toHaveBeenCalledWith(
      `https://test.myrx.io/api/v1/smart-price/register`,
      {
        ...form,
        dateOfBirth: new Date('2000-08-22'),
        phoneNumber: '+1' + phoneNumberMock,
      }
    );
  });

  it('calls isRegisteredUser with valid parameters in test env', async () => {
    const result = { data: true };
    const deviceToken = '1111111';
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(result));
    await expect(isRegisteredUser(deviceToken, 'test')).resolves.toEqual(
      result.data
    );
    expect(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      axiosMock.get
    ).toHaveBeenCalledWith(
      'https://test.myrx.io/api/v1/smart-price/verify-user',
      { headers: { 'x-prescryptive-device-token': '1111111' } }
    );
  });

  it('calls getMemberInformation with valid parameters in test env', async () => {
    const result = {
      data: {
        memberId: '111111',
        rxGroup: 'rx',
        rxBin: 'bin',
        carrierPCN: 'pcn',
      },
    };
    const deviceToken = '1111111';
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(result));
    await expect(getMemberInformation(deviceToken, 'test')).resolves.toEqual(
      result.data
    );
    expect(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      axiosMock.get
    ).toHaveBeenCalledWith(
      'https://test.myrx.io/api/v1/smart-price/get-smartprice-member-info',
      { headers: { 'x-prescryptive-device-token': '1111111' } }
    );
  });

  it('calls getDeviceToken with valid parameters in test env', async () => {
    const phoneNumberMock = '1234567890';
    getPhoneNumberMock.mockReturnValueOnce('+1' + phoneNumberMock);
    const codeMock = '123456';
    const result = { data: { deviceToken: '111111' } };
    axiosMock.post.mockImplementationOnce(() => Promise.resolve(result));
    await expect(
      getDeviceToken(codeMock, phoneNumberMock, 'test')
    ).resolves.toEqual(result.data);
    expect(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      axiosMock.post
    ).toHaveBeenCalledWith(
      'https://test.myrx.io/api/v1/one-time-password/verify',
      { code: codeMock, phoneNumber: '+11234567890' }
    );
  });

  it('calls registerAppUser with valid parameters in test env', async () => {
    const phoneNumberMock = '1234567890';
    const deviceTokenMock = '111111';
    getPhoneNumberMock.mockReturnValueOnce('+1' + phoneNumberMock);
    getDateOfBirthMock.mockReturnValueOnce(new Date('2000-08-22'));

    const form = {
      firstName: 'John',
      lastName: 'Perez',
      email: 'jonh@email.com',
      dateOfBirth: '2000-08-22',
      phoneNumber: '1234567890',
    };
    const memberId = { data: 43211 };

    axiosMock.post.mockImplementation(() => Promise.resolve(memberId));

    await expect(
      registerAppUser(form, deviceTokenMock, 'test')
    ).resolves.toEqual(memberId.data);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axiosMock.post).toHaveBeenCalledWith(
      `https://test.myrx.io/api/v1/smart-price/app-register`,
      {
        ...form,
        dateOfBirth: new Date('2000-08-22'),
        phoneNumber: '+1' + phoneNumberMock,
      },
      { headers: { 'x-prescryptive-device-token': '111111' } }
    );
  });

  it('fetches null if no phone provided', () => {
    getPhoneNumberMock.mockReturnValueOnce(null);
    getDateOfBirthMock.mockReturnValueOnce(null);
    const form = {
      firstName: 'John',
      lastName: 'Perez',
      email: 'jonh@email.com',
      dateOfBirth: '2000-08-22',
      phoneNumber: '',
      verifyCode: '24122',
    };
    expect(registerUser(form)).toEqual(null);
  });

  it('fetches null if no date of birth provided', () => {
    getPhoneNumberMock.mockReturnValueOnce(null);
    getDateOfBirthMock.mockReturnValueOnce(null);
    const form = {
      firstName: 'John',
      lastName: 'Perez',
      email: 'jonh@email.com',
      dateOfBirth: '',
      phoneNumber: '',
      verifyCode: '24122',
    };
    expect(registerUser(form)).toEqual(null);
  });
});
