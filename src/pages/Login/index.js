import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login = () => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#000',
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
};

export default Login;
