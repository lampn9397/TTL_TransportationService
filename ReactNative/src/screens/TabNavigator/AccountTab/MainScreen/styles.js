import { StyleSheet } from 'react-native';

import Colors from '../../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
  },
  scrollViewContentContainer: {
    padding: 8,
    flexGrow: 1,
  },
  itemContainer: {
    borderRadius: 5,
    // marginBottom: 10,
    // paddingVertical: 20,
    backgroundColor: 'white',
  },
});

const avatar = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 150 / 2,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  text: { fontSize: 19 },
});

const item = StyleSheet.create({
  container: {
    // padding: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: { fontSize: 16 },
});

const touchableItem = StyleSheet.create({
  touchable: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PRIMARY,
  },
});

const styles = {
  ...common,
  avatar,
  item,
  touchableItem,
};

export default styles;
