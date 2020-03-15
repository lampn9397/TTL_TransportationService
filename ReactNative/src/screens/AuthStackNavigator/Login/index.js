import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  // Text,
  View,
  Image,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {
  Icon,
  Button,
} from 'react-native-elements';

// Components

// Variables
import Colors from '../../../utils/colors';
import ActionTypes from '../../../redux/AuthModule/action';
import LogoImageUrl from '../../../assets/logo-2.png';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line no-undef
      email: __DEV__ ? 'hoanglb2511' : '',
      // eslint-disable-next-line no-undef
      password: __DEV__ ? '123456789' : '',
      // isKeyboardShown: false,
    };

    props.checkAutoLogin();
  }

  onChangeText = fieldName => (value) => {
    this.setState({ [fieldName]: value });
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const data = { email, password };

    const { onSubmit } = this.props;
    onSubmit(data);
  }

  render() {
    const { email, password } = this.state;
    const { ready, loading } = this.props;

    if (ready === false) {
      return (
        <View style={[styles.container, { justifyContent: 'center', backgroundColor: '#F6901E' }]}>
          <ActivityIndicator color="white" size={Platform.OS === 'ios' ? 'small' : 25} />
        </View>
      );
    }

    return (
      <TouchableOpacity activeOpacity={1} style={styles.container} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.subContainer}>
          <Image source={LogoImageUrl} style={styles.logo.image} />
          <View style={styles.input.container}>
            <View style={styles.input.iconContainer}>
              <Icon name='email' color={Colors.BLACK} size={24} />
            </View>
            <TextInput
              value={email}
              placeholder='Email'
              autoCorrect={false}
              autoCapitalize='none'
              editable={loading === false}
              keyboardType='email-address'
              style={styles.input.textInput}
              underlineColorAndroid='transparent'

              onChangeText={this.onChangeText('email')}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
          </View>
          <View style={styles.input.separator} />
          <View style={styles.input.container}>
            <View style={styles.input.iconContainer}>
              <Icon name='keyboard' color={Colors.BLACK} size={24} />
            </View>
            <TextInput
              value={password}
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='Mật khẩu'
              editable={loading === false}
              style={styles.input.textInput}
              underlineColorAndroid='transparent'
              placeholderTextColor={Colors.placeholderColor}

              onChangeText={this.onChangeText('password')}
              onSubmitEditing={this.onSubmit}
            />
          </View>
          <View style={styles.input.separator} />
          <View style={styles.submitButton.container}>
            <View style={styles.submitButton.subContainer}>
              <Button
                type='solid'
                title='Đăng nhập'
                loading={loading}
                disabled={loading}
                loadingProps={{ color: Colors.BLACK }}
                titleStyle={styles.submitButton.titleStyle}
                buttonStyle={styles.submitButton.buttonStyle}
                icon={<Icon type='material-community' name='lock' size={20} color='white' />}
                onPress={this.onSubmit}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    );
  }
}

Login.propTypes = {
  ready: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  checkAutoLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  return {};
  // const { loginReducer } = state.authReducer;

  // return loginReducer;
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => dispatch({ type: ActionTypes.AUTH_LOGIN, data }),
  checkAutoLogin: () => dispatch({ type: ActionTypes.AUTH_CHECK_ASYNC_STORAGE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
