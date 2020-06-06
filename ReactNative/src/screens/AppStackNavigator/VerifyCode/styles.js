import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  descriptionContainer: {
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  keyboardAvoidingView: {
    padding: 20,
    justifyContent: 'center',
  },
  icon: {
    width: 64,
    height: 64,
    alignSelf: 'center',
  },
  wrapper: {
    justifyContent: 'center',
  },
});

const textInput = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    marginHorizontal: 10,
    // borderBottomWidth: 2,
    backgroundColor: 'white',
  },
});

const submit = StyleSheet.create({
  touchable: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    // color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default {
  ...common,
  textInput,
  submit,
};
