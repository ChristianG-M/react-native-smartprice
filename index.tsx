// Copyright 2021 Prescryptive Health, Inc.
import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export const SmartPrice = (): React.ReactElement => {
  const countFunc = () => false;
  return (
    <View style={styles.container}>
      <Button onPress={countFunc} title='Get SmartPrice Savings!' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});
