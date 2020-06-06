import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
});

const input = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    paddingVertical: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    fontWeight: '500',
    borderColor: Colors.FUTABUS_PRIMARY,
  },
  datepicker: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.FUTABUS_PRIMARY,
  },
});

const submit = StyleSheet.create({
  touchable: {
    margin: 12,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
});

export default {
  ...common,
  input,
  submit,
};
