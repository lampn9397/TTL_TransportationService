import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';
import TOWEL_ICON from './assets/towels.png';
import apiAxios from '../../../utils/axios';
import { apiResponse } from '../../../utils/constants';
import ActionTypes from '../../../redux/OrderModule/action';

class TicketDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount = async () => {
    const stateModel = {
      data: {},
    };

    try {
      const { route } = this.props;

      const { item } = route.params;

      const parameters = {
        ticketId: item.id,
        vehicleId: item.vehicleid,
        routeId: item.routeid,
        routeTimeId: item.routetimeid,
      };

      const response = await apiAxios.post('/tickets/historyDetail', parameters);

      if (response.data.status === apiResponse.status.SUCCESS) {
        stateModel.data = response.data.data;
      }
    } catch (error) {
      console.log(error);
    }

    this.setState(stateModel);
  }

  render = () => {
    const { data } = this.state;

    const {
      route,
      loggedInUser,
    } = this.props;

    const { item } = route.params;

    const {
      fullname,
      email,
      idCard,
      phonenumber,
    } = loggedInUser.user;

    let ticketRoute = '';

    if (data.RouteStart && data.RouteDestination) {
      ticketRoute = `${data.RouteStart.name} => ${data.RouteDestination.name}`;
    }

    let startTime = '';

    if (data.RouteTime) {
      startTime = `${data.RouteTime} ${moment(item.datestart).format('DD-MM-YYYY')}`;
    }

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
            <Text style={styles.field.text}>{ticketRoute}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Điểm dừng</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{data.BusStop?.name}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Thời gian</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{startTime}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Ghế</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{item.seat}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>Giá vé</Text>
            <View style={styles.container} />
            <Text style={[styles.field.text, styles.field.priceText]}>{`${item.price} VNĐ`}</Text>
          </View>
          <View style={[styles.field.container, styles.field.hintContainer]}>
            <MIcon name="wifi" size={24} color={Colors.LIGHT_BLUE} style={styles.field.hintIcon} />
            <MIcon name="water" size={24} color={Colors.LIGHT_BLUE} style={styles.field.hintIcon} />
            <Image source={TOWEL_ICON} style={[styles.field.hintIcon, { width: 24, height: 24, tintColor: Colors.LIGHT_BLUE }]} />
            <View style={styles.container}>
              <Text style={styles.field.hintText}>Ticket price includes Wifi, water and cold towels!</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

TicketDetail.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
  // selectedSeat: PropTypes.instanceOf(Object).isRequired,
  // selectedDate: PropTypes.instanceOf(Object).isRequired,
  // selectedStartTime: PropTypes.instanceOf(Object).isRequired,
  // selectedDropPoint: PropTypes.instanceOf(Object).isRequired,
  // selectedEndPoint: PropTypes.instanceOf(Object).isRequired,
  // selectedStartPoint: PropTypes.instanceOf(Object).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
