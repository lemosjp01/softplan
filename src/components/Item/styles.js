import {StyleSheet, Dimensions} from 'react-native';

const margin = 10;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#cff',
    borderRadius: 6,
    padding: 20,
    marginTop: margin,
    marginBottom: margin - margin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - margin,
  },
  icon: {
    backgroundColor: '#333',
    borderRadius: 50,
    width: 30,
  },
  todoInfo: {
    flexDirection: 'column',
    width: '70%',
  },
});

export default styles;
