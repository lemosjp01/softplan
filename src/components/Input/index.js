import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native';

const Input = ({
  id,
  secure,
  name,
  value,
  onChangeText,
  placeholder,
  onBlur,
  keyboardType,
}) => {
  return (
    <TextInput
      id={id}
      style={styles.input}
      secureTextEntry={secure}
      name={name}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      keyboardType={keyboardType}
      placeholder={placeholder}
    />
  );
};

export default React.memo(Input);
