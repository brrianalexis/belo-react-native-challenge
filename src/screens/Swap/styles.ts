import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  currencies: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    margin: 30,
  },
  currency: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyName: {
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 28,
    padding: 2,
    width: '25%',
    textAlign: 'center',
  },
  swapIcon: {
    fontSize: 28,
    padding: 2,
  },
  currencyTo: {
    justifyContent: 'flex-end',
  },
  alignRight: {
    textAlign: 'right',
  },
});

export default styles;
