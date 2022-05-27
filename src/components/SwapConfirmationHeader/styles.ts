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
  icon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
  resultText: {
    fontSize: 25,
    padding: 5,
    fontWeight: 'bold',
  },
});

export default styles;
