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
  currencyIcon: {
    width: '10%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: constants.text,
  },
  currencySymbol: {
    color: constants.text,
  },
  currencyNames: {
    width: '35%',
  },
  currencyFullName: {
    color: constants.text,
    fontWeight: 'bold',
  },
  currencyBalanceContainer: {
    width: '45%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  balances: {
    color: constants.text,
  },
});

export default styles;
