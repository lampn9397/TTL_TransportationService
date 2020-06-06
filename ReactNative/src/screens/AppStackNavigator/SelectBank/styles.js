import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    backgroundColor: 'white',
  },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
  },
});

const { width } = Dimensions.get('window');

const itemSize = width / 3;

const item = StyleSheet.create({
  touchable: {
    width: itemSize,
    height: itemSize,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
  },
  image: {
    width: itemSize - 20,
    height: itemSize - 50,
    resizeMode: 'contain',
  },
  text: {
    // fontSize: 17,
    marginVertical: 10,
  },
});

const input = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.FUTABUS_PRIMARY,
  },

  submitTouchable: {
    padding: 12,
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },

  submitText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default {
  ...common,
  item,
  input,
};
