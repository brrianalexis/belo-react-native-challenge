import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 60,
    backgroundColor: constants.background,
  },
  actionsContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 297,
  },
});

export default styles;
