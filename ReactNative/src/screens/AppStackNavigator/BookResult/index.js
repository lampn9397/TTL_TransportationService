import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';
import TOWEL_ICON from './assets/towels.png';
import { ticketAxios } from '../../../utils/axios';
import { apiResponse } from '../../../utils/constants';
import ActionTypes from '../../../redux/OrderModule/action';

class BookResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    };
  }

  onSubmit = async () => {
    const alertModel = {
      title: 'Ticket',
      message: 'Failed to confirm ticket',
    };

    try {
      const {
        navigation,
        loggedInUser,
        selectedSeat,
        selectedDate,
        selectTicket,
        selectedStartTime,
        selectedDropPoint,
        selectedEndPoint,
        // selectedStartPoint,
      } = this.props;

      const response = await ticketAxios.post('/addTicket', {
        price: selectedEndPoint.price,
        dateStart: selectedDate.format('DD/MM/YYYY'),
        seat: selectedSeat.name,
        busStopId: selectedDropPoint.id,
        customerId: loggedInUser.user.id,
        routeId: selectedEndPoint.routeId,
        routeTimeId: selectedStartTime.id,
      });

      alertModel.message = response.data.message;

      if (response.data.status === apiResponse.status.SUCCESS) {
        selectTicket(response.data.data);
        navigation.navigate('SelectBank');
        return;
      }
    } catch (error) {
      console.log(error);
    }

    Alert.alert(alertModel.title, alertModel.message);
  }

  render = () => {
    const { submitting } = this.state;

    const {
      loggedInUser,
      selectedSeat,
      selectedDate,
      selectedStartTime,
      selectedDropPoint,
      selectedEndPoint,
      selectedStartPoint,
    } = this.props;

    const {
      fullname,
      email,
      idCard,
      phonenumber,
    } = loggedInUser.user;

    const route = `${selectedStartPoint.name} => ${selectedEndPoint.destination.name}`;

    const startTime = `${selectedStartTime.time} ${selectedDate.format('DD-MM-YYYY')}`;

    const seat = selectedSeat.name;

    const { price } = selectedEndPoint;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Họ và tên</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{fullname}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Email</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{email}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>CMND</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{idCard}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Số điện thoại</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{phonenumber}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Chuyến</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{route}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Điểm dừng</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{selectedDropPoint.name}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Thời gian</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{startTime}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Ghế</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{seat}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Giá vé</Text>
            <View style={styles.container} />
            <Text style={[styles.field.text, styles.field.priceText]}>{`${price} VNĐ`}</Text>
          </View>
          <View style={[styles.field.container, styles.field.hintContainer]}>
            <MIcon name="wifi" size={24} color={Colors.LIGHT_BLUE} style={styles.field.hintIcon} />
            <MIcon name="water" size={24} color={Colors.LIGHT_BLUE} style={styles.field.hintIcon} />
            {/* <MIcon name="paper" size={24} color={Colors.LIGHT_BLUE} style={styles.field.hintIcon} /> */}
            <Image source={TOWEL_ICON} style={[styles.field.hintIcon, { width: 24, height: 24, tintColor: Colors.LIGHT_BLUE }]} />
            <View style={styles.container}>
              <Text style={styles.field.hintText}>Ticket price includes Wifi, water and cold towels!</Text>
            </View>
          </View>
        </View>
        <TouchableRipple
          disabled={submitting}
          rippleColor="white"
          rippleOpacity={0.2}
          rippleContainerBorderRadius={5}
          style={styles.submit.touchable}
          onPress={this.onSubmit}
        >
          {submitting === false && <MIcon name="check-circle" size={24} color="white" style={styles.submit.icon} />}
          {submitting === true && <ActivityIndicator color="white" style={styles.submit.icon} />}
          <Text style={styles.submit.text}>Next</Text>
        </TouchableRipple>
      </View>
    );
  }
}

BookResult.propTypes = {
  selectTicket: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
  selectedSeat: PropTypes.instanceOf(Object).isRequired,
  selectedDate: PropTypes.instanceOf(Object).isRequired,
  selectedStartTime: PropTypes.instanceOf(Object).isRequired,
  selectedDropPoint: PropTypes.instanceOf(Object).isRequired,
  selectedEndPoint: PropTypes.instanceOf(Object).isRequired,
  selectedStartPoint: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  // console.log("mapStateToProps -> state", state)
  return ({
    loggedInUser: state.authReducer.loggedInUser,
    selectedSeat: state.orderReducer.selectedSeat,
    selectedDate: state.orderReducer.selectedDate,
    selectedStartTime: state.orderReducer.selectedStartTime,
    selectedDropPoint: state.orderReducer.selectedDropPoint,
    selectedEndPoint: state.orderReducer.selectedEndPoint,
    selectedStartPoint: state.orderReducer.selectedStartPoint,
  });
};

const mapDispatchToProps = (dispatch) => ({
  selectTicket: (ticket) => dispatch({ type: ActionTypes.SELECT_TICKET, ticket }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookResult);
