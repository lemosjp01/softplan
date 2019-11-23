import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userData: {
    backgroundColor: '#534',
    flex: 8,
    width: '100%',
    alignItems: 'center',
  },
  userInfo: {
    backgroundColor: '#fdfdfd',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  address: {
    fontSize: 18,
    color: '#333',
    textAlign: 'right',
    maxWidth: '60%',
  },
  map: {
    width: '100%',
    height: '80%',
  },
});

export default styles;
