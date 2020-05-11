import React from 'react';
// import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

// Components
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';
import avatarPlaceholder from '../../../../assets/images/user.png';
import ActionTypes from '../../../../redux/AuthModule/action';

class ChangePasswordScreen extends React.Component {
  newPassword = React.createRef();

  reNewPassword = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
    };
  }

  onChangeText = (fieldName) => (text) => {
    const { state } = this;
    state[fieldName] = text;
    this.setState(state);
  };

  onPressSubmit = () => {
    const { state } = this;
    const { changePassword } = this.props;
    changePassword(state);
    Keyboard.dismiss();
  };

  render = () => {
    const {
      oldPassword,
      newPassword,
      reNewPassword,
    } = this.state;

    const { loggedInUser } = this.props;

    let avatarSource = { uri: loggedInUser.avatarUrl };

    if (typeof loggedInUser.avatarUrl !== 'string' || loggedInUser.avatarUrl.length === 0) {
      avatarSource = avatarPlaceholder;
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={[styles.container, styles.wrapper]}
        >
          <View style={[styles.shadow, styles.avatar.container]}>
            <Image source={avatarSource} style={styles.avatar.image} />
          </View>
          <View style={styles.input.container}>
            <Text allowFontScaling style={styles.input.inputNameText}>Mật khẩu hiện tại:</Text>
            <View style={styles.input.inputContainer}>
              <TextInput
                value={oldPassword}
                secureTextEntry
                style={styles.input.textInput}
                onChangeText={this.onChangeText('oldPassword')}
                onSubmitEditing={() => this.newPassword.current.focus()}
              />
            </View>
          </View>
          <View style={styles.input.container}>
            <Text allowFontScaling style={styles.input.inputNameText}>Mật khẩu mới:</Text>
            <View style={styles.input.inputContainer}>
              <TextInput
                ref={this.newPassword}
                value={newPassword}
                secureTextEntry
                style={styles.input.textInput}
                onChangeText={this.onChangeText('newPassword')}
                onSubmitEditing={() => this.reNewPassword.current.focus()}
              />
            </View>
          </View>
          <View style={styles.input.container}>
            <Text allowFontScaling style={styles.input.inputNameText}>Nhập lại mật khẩu:</Text>
            <View style={styles.input.inputContainer}>
              <TextInput
                ref={this.reNewPassword}
                value={reNewPassword}
                secureTextEntry
                style={styles.input.textInput}
                onChangeText={this.onChangeText('reNewPassword')}
                onSubmitEditing={this.onPressSubmit}
              />
            </View>
          </View>
          <View>
            <TouchableRipple
              rippleColor="white"
              rippleOpacity={0.2}
              style={styles.submit.touchable}
              onPress={this.onPressSubmit}
            >
              <Text allowFontScaling style={styles.submit.text}>Xác nhận</Text>
            </TouchableRipple>
          </View>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    );
  };
}

ChangePasswordScreen.propTypes = {
  changePassword: PropTypes.func.isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  const { loggedInUser } = state.authReducer;
  return {
    loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changePassword: (data) => dispatch({ type: ActionTypes.AUTH_UPDATE_PASSWORD, data }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePasswordScreen);
