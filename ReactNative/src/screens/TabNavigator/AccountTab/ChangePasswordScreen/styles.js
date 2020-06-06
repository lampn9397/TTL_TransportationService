import { Platform, StyleSheet } from 'react-native';
import Colors from '../../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
  },
});

const avatar = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 150 / 2,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});

const input = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputNameText: {
    fontSize: 16,
    marginBottom: 3,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    borderColor: Colors.FUTABUS_PRIMARY,
  },
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 10 : undefined,
  },
});

const submit = StyleSheet.create({
  touchable: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default {
  ...common,
  input,
  avatar,
  submit,
};
