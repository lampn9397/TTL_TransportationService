import { StyleSheet, Platform } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

const header = StyleSheet.create({
  title: {
    fontSize: 55,
    color: 'white',
    marginBottom: 30,
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Hiragino Sans',
    }),
  },
  subTitle: {
    fontSize: 17,
    color: 'white',
    marginBottom: 30,
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Hiragino Sans',
    }),
  },
});

const input = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: Colors.LIGHTGRAY,
  },
  textInputContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
});

const submit = StyleSheet.create({
  touchable: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
  },
  text: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});

export default {
  ...common,
  input,
  submit,
  header,
};
