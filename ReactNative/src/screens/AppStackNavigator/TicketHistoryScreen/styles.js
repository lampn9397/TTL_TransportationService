import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const common = StyleSheet.create({
  container: { flex: 1 },
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

const item = StyleSheet.create({
  touchable: {
    margin: 12,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    // flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  headerText: {
    fontSize: 17,
    // fontWeight: '500',
  },
  row: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  fieldContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
});

export default {
  ...common,
  item,
};
