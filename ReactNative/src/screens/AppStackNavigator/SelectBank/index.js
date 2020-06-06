import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  TextInput,
} from 'react-native';
import { StackActions, CommonActions } from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';
import { apiResponse } from '../../../utils/constants';
import ActionTypes from '../../../redux/OrderModule/action';
import apiAxios, { ticketAxios } from '../../../utils/axios';

/* eslint-disable global-require */
const bankLogo = {
  acb: require('./assets/acb.jpg'),
  agribank: require('./assets/agribank.jpg'),
  bidv: require('./assets/bidv.jpg'),
  donga: require('./assets/donga.jpg'),
  eximbank: require('./assets/eximbank.jpg'),
  hsbc: require('./assets/hsbc.jpg'),
  mb: require('./assets/mb.jpg'),
  sacombank: require('./assets/sacombank.jpg'),
  scb: require('./assets/scb.jpg'),
  shb: require('./assets/shb.jpg'),
  techcombank: require('./assets/techcombank.jpg'),
  tienphong: require('./assets/tienphong.jpg'),
};
/* eslint-enable global-require */


class SelectBank extends React.Component {
  otpRef = React.createRef();

  bankAccountRef = React.createRef();

  scrollView = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      bankAccount: '',
      selectedBank: null,
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { selectedBank } = this.state;

    const iconName = selectedBank === item ? 'radiobox-marked' : 'radiobox-blank';

    return (
      <TouchableRipple style={styles.item.touchable} onPress={this.onPressItem(item)}>
        <Image source={bankLogo[item]} style={styles.item.image} />
        <MIcon name={iconName} size={24} color={Colors.FUTABUS_PRIMARY} />
      </TouchableRipple>
    );
  }

  onPressItem = (item) => async () => {
    await new Promise((resolve) => this.setState({ selectedBank: item }, resolve));

    await new Promise((resolve) => setTimeout(resolve, 200));

    this.scrollView.current.scrollToEnd({ animated: true });

    // eslint-disable-next-line no-unused-expressions
    // this.bankAccountRef.current?.focus();
  }

  onChangeText = (fieldName) => (text) => {
    this.setState({ [fieldName]: text });
  }

  onSubmit = async () => {
    const alertModel = {
      title: 'Payment',
      message: 'Failed to payment.',
      buttons: [{ text: 'OK' }],
      options: { cancelable: false },
    };

    const { otp, bankAccount } = this.state;

    let isValid = true;

    // eslint-disable-next-line no-restricted-globals
    if (bankAccount.length !== 16 || isNaN(parseInt(bankAccount))) {
      alertModel.message = 'Invalid bank card number';
      isValid = false;
    }

    // eslint-disable-next-line no-restricted-globals
    if (isValid && (otp.length !== 6 || isNaN(parseInt(bankAccount)))) {
      alertModel.message = 'Invalid OTP';
      isValid = false;
    }

    if (isValid === false) {
      Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
      return;
    }

    const isConfirm = await new Promise((resolve) => {
      Alert.alert(
        'Payment',
        'Are you sure to pay the ticket?',
        [
          { text: 'No', onPress: () => resolve(false) },
          { text: 'Yes', onPress: () => resolve(true) },
        ],
        { cancelable: false },
      );
    });

    if (!isConfirm) return;

    try {
      const {
        // route,
        navigation,
        selectTicket,
        selectedTicket,
      } = this.props;

      const response = await apiAxios.post('/tickets/payment', {
        ticketId: selectedTicket.id,
        OTP: otp,
      });

      alertModel.message = response.data.message;

      if (response.data.status === apiResponse.status.SUCCESS) {
        selectTicket(response.data.data);
        alertModel.buttons[0].onPress = () => {
          navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [
              { name: 'TabNavigator' },
              { name: 'TicketHistoryScreen' },
            ],
          }));
        };
      }
    } catch (error) {
      console.log(error);
    }

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
  }

  requestOTP = async () => {
    const { loggedInUser, selectedTicket } = this.props;

    const now = new Date().getTime();

    const twoMinutesAsMilliseconds = 1000 * 120;

    if (this.requestOTPTime && (this.requestOTPTime + twoMinutesAsMilliseconds) < now) {
      const remainingTime = this.requestOTPTime + twoMinutesAsMilliseconds;
      Alert.alert('OTP', `You can request OTP in ${(now - remainingTime) / 1000} seconds`);
      return;
    }


    try {
      const response = await ticketAxios.post('/otp', {
        ticketId: selectedTicket.id,
        email: loggedInUser.user.email,
      });

      if (response.data.status === apiResponse.status.SUCCESS) {
        this.requestOTPTime = now;
        return;
      }
    } catch (error) {
      console.log(error);
    }
    Alert.alert('OTP', 'Error while request otp, please try again.');
  }

  render = () => {
    const { otp, selectedBank, bankAccount } = this.state;

    const data = Object.keys(bankLogo);

    return (
      <KeyboardAwareScrollView
        style={styles.wrapper}
        ref={this.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={data}
          numColumns={3}
          scrollEnabled={false}
          style={{ flexGrow: 0 }}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

        {selectedBank !== null && (
          <React.Fragment>
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 17, paddingVertical: 5 }}>Bank card number</Text>
              <TextInput
                value={bankAccount}
                ref={this.bankAccountRef}
                returnKeyType="next"
                autoCorrect={false}
                placeholder="Bank card number"
                style={styles.input.textInput}
                onSubmitEditing={() => this.otpRef.current?.focus()}
                onChangeText={this.onChangeText('bankAccount')}
              />
              <View style={{ flexDirection: 'row' }}>
                <TouchableRipple style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }} onPress={this.requestOTP}>
                  <MIcon name="cellphone-iphone" size={24} color={Colors.LIGHT_BLUE} style={{ marginRight: 10 }} />
                  <Text style={{ color: Colors.LIGHT_BLUE }}>Request OTP</Text>
                </TouchableRipple>
              </View>
              <Text style={{ fontSize: 17, paddingVertical: 5 }}>OTP</Text>
              <TextInput
                value={otp}
                ref={this.otpRef}
                autoCorrect={false}
                style={styles.input.textInput}
                onChangeText={this.onChangeText('otp')}
              />
            </View>
            <TouchableRipple style={styles.input.submitTouchable} onPress={this.onSubmit}>
              <Text style={styles.input.submitText}>Submit</Text>
            </TouchableRipple>
          </React.Fragment>
        )}
      </KeyboardAwareScrollView>
    );
  }
}

SelectBank.propTypes = {
  selectTicket: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
  selectedTicket: PropTypes.instanceOf(Object).isRequired,
  // selectedDate: PropTypes.instanceOf(Object).isRequired,
  // selectedStartTime: PropTypes.instanceOf(Object).isRequired,
  // selectedDropPoint: PropTypes.instanceOf(Object).isRequired,
  // selectedEndPoint: PropTypes.instanceOf(Object).isRequired,
  // selectedStartPoint: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  return ({
    loggedInUser: state.authReducer.loggedInUser,
    selectedSeat: state.orderReducer.selectedSeat,
    selectedDate: state.orderReducer.selectedDate,
    selectedTicket: state.orderReducer.selectedTicket,
    selectedStartTime: state.orderReducer.selectedStartTime,
    selectedDropPoint: state.orderReducer.selectedDropPoint,
    selectedEndPoint: state.orderReducer.selectedEndPoint,
    selectedStartPoint: state.orderReducer.selectedStartPoint,
  });
};

const mapDispatchToProps = (dispatch) => ({
  selectTicket: (ticket) => dispatch({ type: ActionTypes.SELECT_TICKET, ticket }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBank);
