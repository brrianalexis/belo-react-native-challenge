import { StyleSheet } from 'react-native';
import { styles as constants } from '../../constants';

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: constants.lighterBackground,
    width: '47%',
    marginTop: 290,
    borderRadius: 10,
  },
  from: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  to: {
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  selectItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 6,
    borderBottomColor: constants.background,
    borderWidth: 0.25,
  },
  text: {
    color: constants.text,
  },
  selectItemIcon: {
    fontSize: 18,
    width: '20%',
    textAlign: 'center',
  },
  selectItemName: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
