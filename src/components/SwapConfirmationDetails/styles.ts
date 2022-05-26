import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  swapFor: {
    width: '100%',
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  swapForTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  swapForDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swapForCurrency: {
    flexDirection: 'row',
  },
  swapForIcon: {
    fontSize: 35,
  },
  swapForText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exchangeRate: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  exchangeRateText: {
    fontSize: 18,
  },
});

export default styles;
