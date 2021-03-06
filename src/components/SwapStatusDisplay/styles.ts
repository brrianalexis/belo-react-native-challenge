import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  display: {
    marginBottom: 30,
  },
  success: {
    color: constants.successText,
  },
  failure: {
    color: constants.errorText,
  },
  icon: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  status: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default styles;
