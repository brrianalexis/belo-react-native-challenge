import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  text: {
    color: constants.text,
  },
  container: {
    width: '85%',
  },
  swapFor: {
    width: '85%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  swapForTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  swapForDetails: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  swapForCurrency: {
    width: '80%',
    flexDirection: 'row',
  },
  icon: {
    height: 35,
    width: 35,
    alignSelf: 'center',
  },
  swapForText: {
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  exchangeRate: {
    width: '85%',
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  exchangeRateValue: {
    fontSize: 18,
    width: '65%',
    textAlign: 'right',
  },
  exchangeRateText: {
    width: '35%',
    fontSize: 18,
  },
});

export default styles;
