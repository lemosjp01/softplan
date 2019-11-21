import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const Icon = React.lazy(() =>
  import('react-native-vector-icons/MaterialIcons'),
);

const Item = ({title, status, userResponsible, onPress}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.icon}>
          <Icon
            name={status ? 'done' : 'highlight-off'}
            size={30}
            color={status ? '#48df48' : '#f80000'}
          />
        </View>
        <View style={styles.todoInfo}>
          <Text>TITULO: {title}</Text>
          <Text />
          <Text>STATUS: {status ? 'Feito' : 'Pendente'}</Text>
          <Text />
          <Text>RESPONSÁVEL: {userResponsible}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Item);
