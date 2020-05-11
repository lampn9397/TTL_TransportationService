import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

const cross = StyleSheet.create({
  container: { flex: 1 },
});

const ios = StyleSheet.create({
  placeholder_Container: {
    paddingVertical: 10,
    // width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  placeholder_Text: {
    // padding: 10,
    // width: WINDOW_WIDTH - 30
  },
  placeholder_Icon: {
    width: 20,
    height: 20,
  },
});

const android = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    // borderColor: '#d5d5d5'
  },
});

export default {
  cross,
  ios,
  android,
};
