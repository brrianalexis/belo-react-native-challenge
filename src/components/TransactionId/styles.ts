import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  transaction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 130,
  },
  id: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
  copyButton: {
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 8,
  },
  copyText: {
    fontSize: 18,
  },
});

export default styles;
