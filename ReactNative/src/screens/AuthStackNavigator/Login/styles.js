import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    backgroundColor: '#F6901E',
  },
});

const logo = StyleSheet.create({
  image: {
    width: 311,
    height: 93,
    marginBottom: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
});

const input = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    height: 48,
    paddingLeft: 8,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flex: 1,
    // borderRadius: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingLeft: 12,
    fontWeight: '700',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#ffffff',
  },
  separator: { height: 12 },
});

const submitButton = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  subContainer: { flex: 1 },
  touchable: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: Colors.BUTTON,
  },
  titleStyle: { marginLeft: 6 },
  buttonStyle: {
    height: 48,
    elevation: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
  },
});

export default {
  ...common,
  logo,
  input,
  submitButton,
};
