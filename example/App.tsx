// Copyright 2020 Prescryptive Health, Inc.

import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SmartPrice } from 'react-native-smartprice';

// For a better alignment please wrap SmartPrice component in a view with a width size.
export default function App(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>SmartPRICE™ SDK React Native Sample Project</Text>
      <View style={{ width: 285 }}>
        <SmartPrice />
      </View>
    </View>
  );
}

const onFinish = (member: any) => {
  console.log(member);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 40,
  },
});
