import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Alert,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import CPPicker from '../../../components/CPPicker';
import ContainerView from '../../../components/ContainerView';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';
import { apiResponse } from '../../../utils/constants';
import ActionTypes from '../../../redux/OrderModule/action';
import { routeAxios, ticketAxios, routeTimeAxios } from '../../../utils/axios';

const seatStatus = {
  SELECT: 'SELECT',
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
};

const seatIcon = {
  SELECT: {
    name: 'seat',
    color: Colors.FUTABUS_PRIMARY,
  },
  AVAILABLE: {
    name: 'seat-outline',
    color: Colors.DARK_GRAY,
  },
  UNAVAILABLE: {
    name: 'seat',
    color: Colors.DARK_GRAY,
  },
};

class BookTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: true,
      dropPoints: [],
      startTimes: [],
      seats: [],
      submitting: false,
      selectedSeat: null,
      selectedDropPoint: null,
      selectedStartTime: null,
    };
  }

  componentDidMount = async () => {
    this.getDropPoint();
    await this.getStartTime();
    this.getSeat();
  }

  getStartTime = async () => {
    try {
      const {
        selectStartTime,
        selectedEndPoint,
        selectedStartPoint,
      } = this.props;

      const response = await routeTimeAxios.post('/getTimeByRoute', {
        startId: selectedStartPoint.id,
        endId: selectedEndPoint.id,
      });

      if (response.data.status === apiResponse.status.SUCCESS) {
        await new Promise((resolve) => {
          const selectedStartTime = response.data.data[0];

          selectStartTime(selectedStartTime);

          this.setState({
            selectedStartTime,
            startTimes: response.data.data,
          }, resolve);
        });
      }
    } catch (error) {
      console.log('getStartTime', error);
    }
  }

  getDropPoint = async () => {
    try {
      const { selectedEndPoint, selectDropPoint } = this.props;

      const response = await routeAxios.post('/busStop', { id: selectedEndPoint.id });

      if (response.data.status === apiResponse.status.SUCCESS) {
        const selectedDropPoint = response.data.data[0];

        selectDropPoint(selectedDropPoint);

        this.setState({
          selectedDropPoint,
          dropPoints: response.data.data,
        });
      }
    } catch (error) {
      console.log('getEndPoint', error);
    }
  }

  getSeat = async () => {
    try {
      const { selectedStartTime } = this.state;

      const { selectedDate } = this.props;

      const date = selectedDate.format('DD/MM/YYYY');

      const response = await ticketAxios.post('/getSeat', {
        date,
        routeTimeId: selectedStartTime.id,
      });

      if (response.data.status === apiResponse.status.SUCCESS) {
        this.setState({
          seats: response.data.data,
        });
      }
    } catch (error) {
      console.log('getSeat', error);
    }
  }

  onValueChange = (fieldName) => async (value) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state[fieldName]?.id === value) return;

    const stateModel = {};

    if (fieldName === 'selectedStartTime') {
      const { startTimes } = this.state;

      const selectedStartTime = startTimes.find((x) => x.id === value);

      stateModel.selectedStartTime = selectedStartTime;
    }

    if (fieldName === 'selectedDropPoint') {
      const { dropPoints } = this.state;

      const selectedDropPoint = dropPoints.find((x) => x.id === value);

      stateModel.selectedDropPoint = selectedDropPoint;
    }

    this.setState(stateModel);
  }

  keyExtractor = (item, index) => index.toString();

  renderSeatItem = ({ item }) => {
    const unavailable = item.status === seatStatus.UNAVAILABLE;

    const rippleOpacity = unavailable ? 0 : undefined;

    let { status } = item;

    const { selectedSeat } = this.state;

    if (selectedSeat?.id === item.id) {
      status = seatStatus.SELECT;
    }

    return (
      <View style={styles.seat.container}>
        <TouchableRipple
          rippleCentered
          rippleOpacity={rippleOpacity}
          style={styles.seat.touchable}
          onPress={this.onPressSeat(item)}
        >
          <MIcon name={seatIcon[status].name} size={24} color={seatIcon[status].color} />
          <Text style={styles.seat.seatText}>{item.name}</Text>
        </TouchableRipple>
      </View>
    );
  }

  onPressSeat = (item) => () => {
    if (item.status === seatStatus.UNAVAILABLE) {
      Alert.alert('Chọn ghế', 'Ghế đã được đặt trước.');
      return;
    }

    const { selectedSeat } = this.state;

    // User has selected a seat and select another one
    if (selectedSeat && selectedSeat.id !== item.id) {
      Alert.alert('Chọn ghế', 'Chỉ được chọn 1 ghế.');
      return;
    }

    const stateModel = { selectedSeat: item };

    // User unselect the selected seat
    if (selectedSeat && selectedSeat.id === item.id) {
      stateModel.selectedSeat = null;
    }

    const { selectSeat } = this.props;

    selectSeat(stateModel.selectedSeat);

    this.setState(stateModel);
  }

  onSubmit = () => {
    const { selectedSeat } = this.state;

    if (selectedSeat === null) {
      Alert.alert('Warning', 'Please take a seat');
      return;
    }

    const { navigation } = this.props;

    navigation.navigate('BookResult');

    // await new Promise((resolve) => this.setState({ submitting: true }, resolve));

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // this.setState({ submitting: false });
  }

  render = () => {
    const {
      ready,
      seats,
      dropPoints,
      submitting,
      startTimes,
      selectedDropPoint,
      selectedStartTime,
    } = this.state;

    const startTimePickerVisible = startTimes.length > 0;

    const dropPointPickerVisible = dropPoints.length > 0;

    return (
      <ContainerView ready={ready} style={[styles.container, styles.wrapper]}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.picker.titleContainer, { marginTop: 0 }]}>
            <MIcon name="clock-outline" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Start time</Text>
            </View>
          </View>
          {startTimePickerVisible && (
            <CPPicker
              pickerItems={startTimes}
              itemValueFieldName="id"
              itemLabelFieldName="time"
              selectedValue={selectedStartTime.id}
              enabled={submitting === false}
              textStyle={{ paddingLeft: 10 }}
              onValueChange={this.onValueChange('selectedStartTime')}
            />
          )}

          <View style={styles.picker.titleContainer}>
            <MIcon name="bus" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Drop point</Text>
            </View>
          </View>
          {dropPointPickerVisible && (
            <CPPicker
              pickerItems={dropPoints}
              itemValueFieldName="id"
              itemLabelFieldName="name"
              selectedValue={selectedDropPoint.id}
              enabled={submitting === false}
              textStyle={{ paddingLeft: 10 }}
              onValueChange={this.onValueChange('selectedDropPoint')}
            />
          )}

          <View style={styles.picker.titleContainer}>
            <MIcon name="seat" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Seat</Text>
            </View>
          </View>
          {/* <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            {seats.map(this.renderSeatItem)}
          </View> */}
          <FlatList
            data={seats}
            numColumns={2}
            extraData={this.state}
            style={styles.seat.flatlist}
            renderItem={this.renderSeatItem}
            keyExtractor={this.keyExtractor}
          />
        </ScrollView>
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
      </ContainerView>
    );
  }
}

BookTicket.propTypes = {
  selectSeat: PropTypes.func.isRequired,
  selectStartTime: PropTypes.func.isRequired,
  selectDropPoint: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  selectedDate: PropTypes.instanceOf(Object).isRequired,
  selectedEndPoint: PropTypes.instanceOf(Object).isRequired,
  selectedStartPoint: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.orderReducer,
});

const mapDispatchToProps = (dispatch) => ({
  selectSeat: (seat) => dispatch({ type: ActionTypes.SELECT_SEAT, seat }),
  selectStartTime: (time) => dispatch({ type: ActionTypes.SELECT_START_TIME, time }),
  selectDropPoint: (point) => dispatch({ type: ActionTypes.SELECT_DROP_POINT, point }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTicket);
