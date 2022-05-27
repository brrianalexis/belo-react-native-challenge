import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  action: {
    padding: 30,
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  text: {
    color: constants.text,
    fontSize: 18,
  },
});

export default styles;
