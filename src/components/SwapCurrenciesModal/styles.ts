import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    width: '47%',
    marginTop: 290,
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
