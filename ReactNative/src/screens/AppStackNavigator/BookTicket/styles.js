import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 10,
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
    marginTop: 20,
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

const { width } = Dimensions.get('window');

const seat = StyleSheet.create({
  flatlist: {
    transform: [{ scaleX: -1 }],
  },
  container: {
    paddingVertical: 10,
  },
  touchable: {
    width: width / 2,
    alignItems: 'center',
    transform: [{ scaleX: -1 }],
  },
  seatText: {
    fontSize: 16,
  },
});

export default {
  ...common,
  picker,
  submit,
  seat,
};
