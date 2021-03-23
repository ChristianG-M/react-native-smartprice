// Copyright 2020 Prescryptive Health, Inc.

import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SmartPrice } from './src/component/index';

export default function App(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>
        Smart<b>PRICE</b> SDK React Native Sample Project
      </Text>
      <SmartPrice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 40,
  },
});
