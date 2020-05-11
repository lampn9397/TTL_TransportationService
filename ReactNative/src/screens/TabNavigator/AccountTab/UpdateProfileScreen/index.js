import React from 'react';
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
import ActionTypes from '../../../../redux/AuthModule/action';
import avatarPlaceholder from '../../../../assets/images/user.png';

class UpdateProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    const loggedInUser = JSON.parse(JSON.stringify(props.loggedInUser));

    this.state = {
      loggedInUser,
    };
  }

  onChangeText = (fieldName) => (text) => {
    const { loggedInUser } = this.state;
    loggedInUser[fieldName] = text;
    this.setState({ loggedInUser });
  };

  onPressSubmit = () => {
    const { loggedInUser } = this.state;
    const { updateProfile } = this.props;
    updateProfile(loggedInUser);
    Keyboard.dismiss();
  };

  render = () => {
    const { loggedInUser } = this.state;

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
            <Text allowFontScaling style={styles.input.inputNameText}>Tên</Text>
            <View style={styles.input.inputContainer}>
              <TextInput value={loggedInUser.fullname} style={styles.input.textInput} onChangeText={this.onChangeText('fullname')} />
            </View>
          </View>
          {/* <View style={styles.input.container}>
          <Text allowFontScaling style={styles.input.inputNameText}>Email</Text>
          <View style={styles.input.inputContainer}>
            <TextInput value={loggedInUser.email} style={styles.input.textInput} onChangeText={this.onChangeText('Email')} />
          </View>
        </View> */}
          <TouchableRipple
            rippleColor="white"
            rippleOpacity={0.2}
            style={styles.submit.touchable}
            onPress={this.onPressSubmit}
          >
            <Text allowFontScaling style={styles.submit.text}>Cập nhật</Text>
          </TouchableRipple>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    );
  };
}

UpdateProfileScreen.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  const { loggedInUser } = state.authReducer;
  return {
    loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch({ type: ActionTypes.AUTH_UPDATE_PROFILE, data }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateProfileScreen);
