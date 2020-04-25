import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const common = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: {
    // backgroundColor: 'white',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

const styles = {
  common
};

export default styles;