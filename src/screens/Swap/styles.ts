import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: constants.background,
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
  text: {
    color: constants.text,
  },
  currencyName: {
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    color: constants.text,
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
  buttonContainer: {
    width: '85%',
  },
});

export default styles;
