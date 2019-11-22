import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles from './styles';

const ButtonLogin = ({title, onPress, disabled}) => {
  return (
    <TouchableHighlight
      style={disabled ? styles.disabled : styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.label}>{title}</Text>
    </TouchableHighlight>
  );
};

export default React.memo(ButtonLogin);
