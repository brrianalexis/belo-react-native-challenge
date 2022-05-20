import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '15%',
    width: '85%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  balance: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  currenciesTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 40,
  },
});

export default styles;
