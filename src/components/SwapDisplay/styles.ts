import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  swapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  swapAmount: {
    color: constants.primary,
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 20,
    width: '75%',
  },
  swapMaxText: {
    fontSize: 20,
    color: constants.text,
    fontWeight: '500',
  },
});

export default styles;
