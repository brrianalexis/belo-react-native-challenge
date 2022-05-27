import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  transaction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 130,
  },
  text: {
    color: constants.text,
    fontSize: 18,
  },
  id: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 30,
  },
  copyButton: {
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
});

export default styles;
