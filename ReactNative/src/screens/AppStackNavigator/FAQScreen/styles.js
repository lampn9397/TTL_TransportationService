import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
});

const item = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#c8cfd1',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  content: {
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default {
  ...common,
  item,
};
