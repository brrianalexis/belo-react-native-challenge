import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.text,
  },
  headerBalance: {
    textAlign: 'center',
    fontSize: 16,
    color: constants.text,
  },
  errorContainer: {
    backgroundColor: constants.errorBackground,
    width: '85%',
    marginTop: 100,
    position: 'absolute',
    padding: 8,
    borderRadius: 10,
  },
  errorMessage: {
    textAlign: 'center',
    color: constants.errorText,
    fontWeight: '500',
  },
});

export default styles;
