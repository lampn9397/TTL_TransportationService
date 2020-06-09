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
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

// Components
import ContainerView from '../../../components/ContainerView';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import ActionTypes from '../../../redux/AuthModule/action';

const useNativeDriver = Platform.select({ ios: true, android: false });

class ForgotPassword extends React.Component {
  scrollViewRef = React.createRef();

  headerVisibleAnimation = new Animated.Value(1);

  constructor(props) {
    super(props);
    this.state = {
      email: __DEV__ ? 'davidbull931997@gmail.com' : '',
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
    // this.scrollViewRef.current.scrollToEnd({ animated: true });

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

  onSubmit = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.forgotPassword({ email: this.state.email });
  }

  login = () => {
    const { navigation } = this.props;

    navigation.replace('Login');
  }

  render = () => {
    const { loading } = this.props;

    const { email } = this.state;

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
                    <Text style={styles.header.title}>Forgot password</Text>
                  </View>
                </Animated.View>

                <View>
                  <Text style={styles.header.subTitle}>Enter account email to get reset password!</Text>
                </View>
                <View style={styles.input.container}>
                  <MIcon name="email" size={24} color="#2D9BDD" />
                  <View style={styles.input.textInputContainer}>
                    <TextInput
                      value={email}
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Email"
                      editable={loading === false}
                      style={styles.input.textInput}
                      onChangeText={this.onChangeText('email')}
                    />
                  </View>
                </View>
                <TouchableRipple
                  rippleColor="white"
                  rippleOpacity={0.1}
                  disabled={loading}
                  style={styles.submit.touchable}
                  onPress={this.onSubmit}
                >
                  {loading === false && <Text style={styles.submit.text}>Get password</Text>}
                  {loading && <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 20} color="white" />}
                </TouchableRipple>

                <TouchableRipple
                  rippleColor="white"
                  rippleOpacity={0.1}
                  disabled={loading}
                  style={[styles.submit.touchable, { marginTop: 10 }]}
                  onPress={this.login}
                >
                  {loading === false && <Text style={styles.submit.text}>Go to Login</Text>}
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

ForgotPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (data) => dispatch({ type: ActionTypes.AUTH_FORGOT_PASSWORD, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
