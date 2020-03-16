import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amesPosition: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // zIndex: -1,
    position: 'absolute',
    height: 160 / 2 + 10,
    // backgroundColor: Colors.PRIMARY
  },
});

const styles = {
  common,
};

export default styles;
