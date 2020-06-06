import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  StatusBar,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import ContainerView from '../../../components/ContainerView';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';
import ActionTypes from '../../../redux/AuthModule/action';

const codeLength = 6;

const icons = {
  // eslint-disable-next-line global-require
  imageSuccess: require('./assets/message.png'),
};

class VerifyCode extends React.Component {
  constructor(props) {
    super(props);

    const codeArray = Array.from({ length: codeLength }, () => '');

    this.inputRefs = codeArray.map(() => React.createRef());

    this.state = {
      codeArray,
      submitting: false,
    };
  }

  renderTextInput = (item, index) => {
    const autoFocus = index === 0;

    const { submitting } = this.state;

    return (
      <TextInput
        key={index}
        value={item}
        autoCorrect={false}
        autoFocus={autoFocus}
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType="number-pad"
        ref={this.inputRefs[index]}
        editable={submitting === false}
        style={styles.textInput.input}
        underlineColorAndroid="transparent"
        // events
        onKeyPress={this.onKeyPress(item, index)}
        onChangeText={this.onChangeText(item, index)}
        onSubmitEditing={this.onSubmit}
      />
    );
  }

  onKeyPress = (item, index) => (e) => {
    // console.log('onKeyPress > ', e.nativeEvent);
    const { key } = e.nativeEvent;
    if (key === 'Backspace') {
      const { codeArray } = this.state;
      const isEmpty = codeArray[index].length === 0;
      if (isEmpty) {
        const previousIndex = index - 1;
        const canPreviousInput = previousIndex >= 0;
        if (canPreviousInput) {
          this.inputRefs[previousIndex].current.focus();
        }
      }
    }
  }

  onChangeText = (item, index) => (text) => {
    const { codeArray } = this.state;
    codeArray[index] = text;
    this.setState({ codeArray });
    if (text.length) {
      const nextIndex = index + 1;
      const canNextInput = nextIndex < this.inputRefs.length;
      if (canNextInput) {
        this.inputRefs[nextIndex].current.focus();
      }
    }
  }

  onSubmit = () => {
    const { verifyCode } = this.props;

    const { codeArray } = this.state;

    const code = codeArray.join('');

    verifyCode(code);
  }

  render = () => {
    const { codeArray, submitting } = this.state;

    const isEmpty = codeArray.indexOf('') > -1;

    const customStyle = {
      submit: {
        backgroundColor: isEmpty ? Colors.LIGHT_GRAY : Colors.PRIMARY,
      },
      text: {
        color: isEmpty ? undefined : 'white',
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
            <TouchableWithoutFeedback style={[styles.container]} onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" style={[styles.container, styles.keyboardAvoidingView]}>
                  <Image source={icons.imageSuccess} style={styles.icon} />
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{`Điền vào ${codeLength} chữ số nhận được từ SMS để tiếp tục.`}</Text>
                  </View>
                  <View style={styles.textInput.container}>
                    {codeArray.map(this.renderTextInput)}
                  </View>
                  <TouchableRipple
                    disabled={isEmpty || submitting}
                    rippleColor="white"
                    style={[styles.submit.touchable, customStyle.submit]}
                    onPress={this.onSubmit}
                  >
                    {submitting === false && <Text style={[styles.submit.text, customStyle.text]}>Xác nhận</Text>}
                    {submitting && <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 25} color="white" />}
                  </TouchableRipple>
                </KeyboardAvoidingView>
              </View>
            </TouchableWithoutFeedback>
          </ContainerView>
        </LinearGradient>
      </React.Fragment>
    );
  }
}

VerifyCode.propTypes = {
  verifyCode: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  verifyCode: (code) => dispatch({ type: ActionTypes.AUTH_REGISTER_VERIFY_CODE, code }),
});

export default connect(null, mapDispatchToProps)(VerifyCode);
