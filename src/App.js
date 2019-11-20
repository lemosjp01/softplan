/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </>
  );
};

export default App;
