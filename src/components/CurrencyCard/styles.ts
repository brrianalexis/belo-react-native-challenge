import { StyleSheet } from 'react-native';

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
