import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  currencyCard: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  text: {
    color: constants.text,
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  currencyNames: {
    width: '35%',
  },
  currencyFullName: {
    fontWeight: 'bold',
  },
  currencyBalanceContainer: {
    width: '45%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;
