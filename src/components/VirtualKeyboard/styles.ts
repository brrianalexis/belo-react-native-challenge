import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    marginBottom: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  button: {
    width: '25%',
    height: '100%',
    alignSelf: 'center',
  },
  key: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
  },
});

export default styles;
