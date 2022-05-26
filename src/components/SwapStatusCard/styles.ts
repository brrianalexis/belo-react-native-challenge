import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
  total: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
