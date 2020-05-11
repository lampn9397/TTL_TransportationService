import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
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
import LogoImageUrl from '../../../assets/images/logo-2.png';

import styles from './styles';

const Login = (props) => {
  const {
    ready,
    loading,
    onSubmit: onSubmitProps,
  } = props;

  const [state, setState] = React.useState({
    username: __DEV__ ? 'lampn' : '',
    password: __DEV__ ? '123123' : '',
  });

  const passwordInput = React.useRef();

  const onChangeText = (fieldName) => (value) => {
    setState({ ...state, [fieldName]: value });
  };

  const onSubmit = () => {
    const data = {
      username: state.username,
      password: state.password,
    };

    onSubmitProps(data);
  };

  if (ready === false) {
    return (
      <View style={[styles.container, { justifyContent: 'center', backgroundColor: Colors.ORANGE }]}>
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
            <Icon name="email" color={Colors.BLACK} size={24} />
          </View>
          <TextInput
            value={state.username}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            editable={loading === false}
            style={styles.input.textInput}
            underlineColorAndroid="transparent"

            onChangeText={onChangeText('username')}
            onSubmitEditing={() => passwordInput.current.focus()}
          />
        </View>
        <View style={styles.input.separator} />
        <View style={styles.input.container}>
          <View style={styles.input.iconContainer}>
            <Icon name="keyboard" color={Colors.BLACK} size={24} />
          </View>
          <TextInput
            value={state.password}
            secureTextEntry
            ref={passwordInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Mật khẩu"
            editable={loading === false}
            style={styles.input.textInput}
            underlineColorAndroid="transparent"
            placeholderTextColor={Colors.placeholderColor}

            onChangeText={onChangeText('password')}
            onSubmitEditing={onSubmit}
          />
        </View>
        <View style={styles.input.separator} />
        <View style={styles.submitButton.container}>
          <View style={styles.submitButton.subContainer}>
            <Button
              type="solid"
              title="Đăng nhập"
              loading={loading}
              disabled={loading}
              loadingProps={{ color: Colors.BLACK }}
              titleStyle={styles.submitButton.titleStyle}
              buttonStyle={styles.submitButton.buttonStyle}
              icon={<Icon type="material-community" name="lock" size={20} color="white" />}
              onPress={onSubmit}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};

Login.propTypes = {
  ready: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // checkAutoLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state.authReducer;

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch({ type: ActionTypes.AUTH_LOGIN, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
