# [SmartPRICE™](https://smartprice.myrx.io/) React Native Smartprice SDK

**_includes_**:

- SmartPRICE™ button and modal component for React Native Expo Project
- Example Expo Project to showcase the use of the SmartPrice component

## Installation

```sh
# npm:
$ npm install react-native-smartprice
# yarn:
$ yarn add react-native-smartprice
```

---

# Use SmartPrice component

### `<SmartPrice/>`

**import `SmartPrice` to your code base**

```js
import { SmartPrice } from 'react-native-smartprice';
```

**Add `<SmartPrice/>` tag to your tsx file**

```js
<SmartPrice />
```

**You have several props to configure the tag**

**Prefilled user data**

```js
<SmartPrice
  userData={{
    phoneNumber: '1234567890', // Ten Digit Number (A less thatn 10 digit number will not load)
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: new Date('10-10-1978'), // A valid date is between 18-65 years old
    email: 'john@pixl.com', // A wrongly formatted email will not be loaded
  }}
/>
```

**Device token**

If you have the deviceToken of your user you can set that in the tag
and it will load their SmartPrice savings card automatically.

```js
<SmartPrice
  userData={{
    deviceToken: 'valid device token',
  }}
/>
```

**Obtain membership data when the user finishes creating the account**

```js
<SmartPrice onFinishFlow={onFinish} />;

const onFinish = (membershipData) => {
  const { carrierPCN, memberId, rxBin, rxGroup, deviceToken } = membershipData;
  //membershipData.deviceToken? is optional
};
```

**If you set the getDeviceToken flag to 'true' you will get back the deviceToken so you can use it later**

```js
<SmartPrice getDeviceToken={true} />
```

---

# Configure component for testing environment

As in the example directory you need to set a target variable in your app.config.js in your expo root folder

```js
export default {
  extra: {
    target: 'test',
  },
};
```

The two possible values are 'test' and 'prod'. The default value is 'prod'
This variable switches the target's endpoints to register and retrieve member information.

## Development

Review the Example project configuration

Run example with:

```sh
$ yarn
```

```sh
$ yarn web
```

### Updates to the project, you may test it locally by packaging the main project and test it in the example project.

1. npm pack to get ().tgz
2. Cut/paste ().tgz to example project
3. yarn add file:().tgz
