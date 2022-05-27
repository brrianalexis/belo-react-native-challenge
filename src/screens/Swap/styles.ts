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
    width: '90%',
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
    height: 30,
    width: 30,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
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
