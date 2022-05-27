import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

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
    borderColor: constants.lighterBackground,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '25%',
    height: '100%',
    alignSelf: 'center',
  },
  key: {
    color: constants.text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
  },
});

export default styles;
