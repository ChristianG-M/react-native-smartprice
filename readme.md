# React Native Smartprice SDK

1. npm pack to get ().tgz
2. Cut/paste ().tgz to example project
3. yarn add file:().tgz

```js
<SmartPrice
  userData={{
    phoneNumber: '1234567890',
    firstName: 'Alejandro',
    lastName: 'Toledo',
    dateOfBirth: new Date('10-10-1978'),
    email: 'alex@pixl',
  }}
/>
```

```js
<SmartPrice
  userData={{
    deviceToken: 'valid device token',
  }}
  onFinishFlow={onFinish}
  getDeviceToken={false}
/>
```
