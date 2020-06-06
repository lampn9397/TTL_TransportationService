import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  scrollView: {
    backgroundColor: '#eff2f4',
  },
  scrollViewContent: {
    padding: 10,
    flexGrow: 1,
    // justifyContent: 'center',
  },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    // borderRadius: 2.5,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 3 },
  },
});

const picker = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  titleContainer: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

const item = StyleSheet.create({
  container: {
    margin: 10,
    // padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  subContainer: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  bodyContainer: {
    padding: 10,
  },
});

const search = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
  },
  searchTouchable: {
    width: 45,
    height: 45,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 45 / 2,
    justifyContent: 'center',
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },
  flatList: {
    // marginHorizontal: 10,
    // borderRadius: 5,
    // backgroundColor: 'white',
  },
  itemTouchable: {
    padding: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
});

const FAQ = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchable: {
    width: 45,
    height: 45,
    marginHorizontal: 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 45 / 2,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.FUTABUS_PRIMARY,
  },
});

export default {
  ...common,
  item,
  picker,
  search,
  FAQ,
};
