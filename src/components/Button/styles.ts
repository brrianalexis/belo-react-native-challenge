import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '85%',
  },
  fullWidth: {
    width: 300,
  },
  fullWidthText: {
    fontSize: 30,
  },
  primary: {
    backgroundColor: constants.primary,
  },
  secondary: {
    backgroundColor: constants.secondary,
  },
});

export default styles;
