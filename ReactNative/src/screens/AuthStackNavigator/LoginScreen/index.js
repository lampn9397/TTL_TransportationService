import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Keyboard,
  Platform,
  Animated,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

// Components
import ContainerView from '../../../components/ContainerView';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import ActionTypes from '../../../redux/AuthModule/action';

const noop = () => null;

const useNativeDriver = Platform.select({ ios: true, android: false });

class LoginScreen extends React.Component {
  scrollViewRef = React.createRef();

  headerVisibleAnimation = new Animated.Value(1);

  constructor(props) {
    super(props);
    this.state = {
      username: __DEV__ ? 'lampn' : '',
      password: __DEV__ ? '123123' : '',
      storeId: __DEV__ ? 'lampn@ames.edu.vn' : '',
      secureTextEntry: true,
    };

    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillChangeFrame', this.keyboardWillChangeFrame);
    } else {
      Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
  }

  componentWillUnmount = () => {
    if (Platform.OS === 'ios') {
      Keyboard.removeListener('keyboardWillChangeFrame', this.keyboardWillChangeFrame);
    } else {
      Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
    }
  }

  keyboardWillChangeFrame = (data) => {
    const { startCoordinates, endCoordinates } = data;

    const isKeyboardVisible = startCoordinates.screenY > endCoordinates.screenY;

    let toValue = 1;

    if (isKeyboardVisible) {
      toValue = 0;
      // this.scrollViewRef.current.scrollToEnd({ animated: true });
    }

    Animated.timing(this.headerVisibleAnimation, {
      toValue,
      useNativeDriver,
    }).start(() => {
      if (isKeyboardVisible) {
        this.scrollViewRef.current.scrollToEnd({ animated: true });
      }
    });
  }

  keyboardDidShow = () => {
    this.scrollViewRef.current.scrollToEnd({ animated: true });

    Animated.timing(this.headerVisibleAnimation, {
      toValue: 0,
      useNativeDriver,
    }).start();
  }

  keyboardDidHide = () => {
    Animated.timing(this.headerVisibleAnimation, {
      toValue: 1,
      useNativeDriver,
    }).start();
  }

  onChangeText = (fieldName) => (text) => {
    this.setState({ [fieldName]: text });
  }

  toggleSecureTextEntry = (toggleState) => () => {
    this.setState({ secureTextEntry: toggleState });
  }

  onSubmit = () => {
    const { username, password, storeId } = this.state;

    const data = { username, password, storeId };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.login(data);
  }

  render = () => {
    const { loading } = this.props;

    const {
      // storeId,
      username,
      password,
      secureTextEntry,
    } = this.state;

    const customStyles = {
      headerContainer: {
        opacity: this.headerVisibleAnimation,
      },
    };

    return (
      <React.Fragment>
        <StatusBar animated translucent backgroundColor="transparent" barStyle="light-content" />
        <LinearGradient
          colors={['#f7b733', '#fc4a1a']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >

          <ContainerView ready style={styles.container}>
            <ScrollView
              ref={this.scrollViewRef}
              // style={styles.container}
              keyboardDismissMode="interactive"
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContentContainer}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={25}
                style={[styles.container, styles.wrapper]}
              >

                <Animated.View style={customStyles.headerContainer}>
                  <View>
                    <Text style={styles.header.title}>Log in</Text>
                  </View>
                </Animated.View>
                <View>
                  <Text style={styles.header.subTitle}>{'Welcome to Transportation Service.\nGet in to access your profile!'}</Text>
                </View>

                <View style={styles.input.container}>
                  <MIcon name="account-circle" size={24} color="#2D9BDD" />
                  <View style={styles.input.textInputContainer}>
                    <TextInput
                      value={username}
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Username"
                      editable={loading === false}
                      style={styles.input.textInput}
                      onChangeText={this.onChangeText('username')}
                    />
                  </View>
                </View>
                <View style={styles.input.container}>
                  <MIcon name="shield-lock" size={24} color="#2D9BDD" />
                  <View style={styles.input.textInputContainer}>
                    <TextInput
                      value={password}
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Password"
                      editable={loading === false}
                      style={styles.input.textInput}
                      secureTextEntry={secureTextEntry}
                      onChangeText={this.onChangeText('password')}
                    />
                  </View>
                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={noop}
                    onPressIn={this.toggleSecureTextEntry(false)}
                    onPressOut={this.toggleSecureTextEntry(true)}
                  >
                    <MIcon name="eye-circle" size={24} color="#2D9BDD" />
                  </TouchableHighlight>
                </View>
                {/* <View style={styles.input.container}>
                  <MIcon name="cart" size={24} color="#2D9BDD" />
                  <View style={styles.input.textInputContainer}>
                    <TextInput
                      value={storeId}
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="StoreId"
                      editable={loading === false}
                      style={styles.input.textInput}
                      onChangeText={this.onChangeText('storeId')}
                    />
                  </View>
                </View> */}
                <TouchableRipple
                  rippleColor="white"
                  rippleOpacity={0.1}
                  disabled={loading}
                  style={styles.submit.touchable}
                  onPress={this.onSubmit}
                >
                  {loading === false && <Text style={styles.submit.text}>Log in</Text>}
                  {loading && <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 20} color="white" />}
                </TouchableRipple>
              </KeyboardAvoidingView>
            </ScrollView>
          </ContainerView>
        </LinearGradient>
      </React.Fragment>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch({ type: ActionTypes.AUTH_LOGIN, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
