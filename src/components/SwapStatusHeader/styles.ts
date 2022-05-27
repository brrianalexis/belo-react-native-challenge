import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-around',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: constants.text,
  },
});

export default styles;
