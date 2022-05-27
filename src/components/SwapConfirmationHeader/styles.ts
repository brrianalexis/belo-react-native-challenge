import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  text: {
    color: constants.text,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
  },
  resultIcon: {
    fontSize: 40,
  },
  resultText: {
    fontSize: 25,
    padding: 5,
    fontWeight: 'bold',
  },
});

export default styles;
