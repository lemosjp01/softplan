import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 10,
    alignItems: 'center',
  },
  form: {
    fontSize: 18,
    flex: 2,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageBox: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default styles;
