// Copyright 2021 Prescryptive Health, Inc.

import axios from 'axios';
import { getDateOfBirth } from '../utils/parsers/date-parser';
import { getPhoneNumber } from '../utils/parsers/phone-parser';
import Constants from 'expo-constants';

const API_URL = 'https://myrx.io/api/v1';
const TEST_API_URL = 'https://test.myrx.io/api/v1';

const buildTarget = Constants.manifest.extra as BuildTarget;
export interface BuildTarget {
  target: string;
}
export interface IApiResponseError {
  response: {
    data: {
      details: Record<string, unknown>;
      status: string;
      message?: string;
    };
  };
}

export interface IMemberInformation {
  carrierPCN: string;
  memberId: string;
  rxBin: string;
  rxGroup: string;
  deviceToken?: string;
}

export interface IMemberInfoResponse {
  data: IMemberInformation | boolean;
  message: string;
  status: string;
}

export interface IFormData {
  dateOfBirth: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyCode?: string;
}

export interface IDeviceTokenResponse {
  data: { deviceToken: string };
  message: string;
  responseCode: number;
  status: string;
}

export const registerUser = (
  form: IFormData,
  env = buildTarget.target
): Promise<IMemberInfoResponse> | null => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  const dob = getDateOfBirth(form.dateOfBirth);
  const phone = getPhoneNumber(form.phoneNumber);
  if (!dob || !phone) return null;
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/smart-price/register`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        dateOfBirth: dob,
        phoneNumber: phone,
        verifyCode: form.verifyCode,
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data.details.errors);
      });
  });
};

export const sendVerificationCodeRequest = (
  phoneNumberRequest: string,
  env = buildTarget.target
): Promise<unknown> => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  const phoneNumber = getPhoneNumber(phoneNumberRequest);
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/one-time-password/send`, {
        phoneNumber,
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data.message);
      });
  });
};

export const isRegisteredUser = (
  deviceToken: string,
  env = buildTarget.target
): Promise<IMemberInfoResponse> => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/smart-price/verify-user`, {
        headers: {
          'x-prescryptive-device-token': deviceToken,
        },
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data.details.errors);
      });
  });
};

export const getMemberInformation = (
  deviceToken: string,
  env = buildTarget.target
): Promise<IMemberInfoResponse> => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/smart-price/get-smartprice-member-info`, {
        headers: {
          'x-prescryptive-device-token': deviceToken,
        },
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data.details.errors);
      });
  });
};

export const getDeviceToken = (
  code: string,
  phoneNumber: string,
  env = buildTarget.target
): Promise<IDeviceTokenResponse> => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  const phone = getPhoneNumber(phoneNumber);
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/one-time-password/verify`, {
        code,
        phoneNumber: phone,
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data.details.errors);
      });
  });
};

export const registerAppUser = (
  form: IFormData,
  deviceToken: string,
  env = buildTarget.target
): Promise<IMemberInfoResponse> | null => {
  const url = env === 'test' ? TEST_API_URL : API_URL;
  const dob = getDateOfBirth(form.dateOfBirth);
  const phone = getPhoneNumber(form.phoneNumber);
  if (!dob || !phone) return null;
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${url}/smart-price/app-register`,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          dateOfBirth: dob,
          phoneNumber: phone,
        },
        {
          headers: {
            'x-prescryptive-device-token': deviceToken,
          },
        }
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error: IApiResponseError) => {
        reject(error.response.data);
      });
  });
};
