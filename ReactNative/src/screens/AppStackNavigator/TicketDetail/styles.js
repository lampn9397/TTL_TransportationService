import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
});

const field = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 20,
    color: Colors.FUTABUS_PRIMARY,
  },
  hintContainer: {
    marginTop: 20,
  },
  hintText: {
    fontSize: 17,
    fontWeight: '400',
  },
  hintIcon: {
    marginRight: 5,
  },
});

const submit = StyleSheet.create({
  touchable: {
    padding: 10,
    marginTop: 20,
    minHeight: 47,
    // borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});

export default {
  ...common,
  field,
  submit,
};
