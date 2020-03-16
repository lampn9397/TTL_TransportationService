import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    borderRadius: 2.5,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 3 },
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

export default {
  ...common,
  item,
};
