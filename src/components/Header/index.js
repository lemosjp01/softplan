import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
};

export default React.memo(Header);
