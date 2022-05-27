import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  card: {
    width: '85%',
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 15,
  },
  successCard: {
    backgroundColor: constants.successBackground,
  },
  failureCard: {
    backgroundColor: constants.errorBackground,
  },
  successText: {
    color: constants.successText,
  },
  failureText: {
    color: constants.errorText,
  },
  row: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  left: {
    width: '50%',
  },
  right: {
    width: '60%',
    textAlign: 'right',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: constants.text,
  },
  total: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.text,
  },
});

export default styles;
