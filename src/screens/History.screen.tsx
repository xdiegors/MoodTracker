import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const History: JSX.Element = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
