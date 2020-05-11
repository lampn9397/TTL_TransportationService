import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import CPPicker from '../../../components/CPPicker';
import ContainerView from '../../../components/ContainerView';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../utils/colors';

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

export default class BookTicket extends React.Component {
  constructor(props) {
    super(props);
    const routeList = [
      { id: 1, name: 'Da Nang' },
      { id: 2, name: 'HCM' },
      { id: 3, name: 'Ha Noi' },
    ];

    const seatList = [
      { id: 1, name: 'Seat 1', status: seatStatus.AVAILABLE },
      { id: 2, name: 'Seat 2', status: seatStatus.UNAVAILABLE },
      { id: 3, name: 'Seat 3', status: seatStatus.UNAVAILABLE },
      { id: 4, name: 'Seat 4', status: seatStatus.AVAILABLE },
      { id: 5, name: 'Seat 5', status: seatStatus.SELECT },
      { id: 6, name: 'Seat 6', status: seatStatus.AVAILABLE },
    ];

    this.state = {
      ready: true,
      submitting: false,
      seats: seatList,
      routes: routeList,
      selectedRoute: routeList[0].id,
    };
  }

  onValueChange = (fieldName) => async (value) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state[fieldName] === value) return;

    const stateModel = { [fieldName]: value };

    this.setState(stateModel);
  }

  onSubmit = async () => {
    await new Promise((resolve) => this.setState({ submitting: true }, resolve));

    await new Promise((resolve) => setTimeout(resolve, 3000));

    this.setState({ submitting: false });
  }

  keyExtractor = (item, index) => index.toString();

  renderSeatItem = ({ item }) => {
    return (
      <View style={[styles.container, styles.seat.container]}>
        <TouchableOpacity activeOpacity={1} style={styles.seat.touchable} onPress={this.onPressSeat(item)}>
          <MIcon name={seatIcon[item.status].name} size={24} color={seatIcon[item.status].color} />
          <Text style={styles.seat.seatText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressSeat = (item) => () => {
    if (item.status === seatStatus.UNAVAILABLE) {
      Alert.alert('Chọn ghế', 'Ghế đã được đặt trước');
      return;
    }

    const { seats } = this.state;

    const itemIndex = seats.findIndex((x) => x.id === item.id);

    if (itemIndex > -1) {
      const { status } = seats[itemIndex];

      seats[itemIndex].status = status === seatStatus.SELECT ? seatStatus.AVAILABLE : seatStatus.SELECT;

      this.setState({ seats });
    }
  }

  render = () => {
    const {
      ready,
      seats,
      routes,
      submitting,
      selectedRoute,
    } = this.state;

    const routePickerVisible = true;

    return (
      <ContainerView ready={ready} style={[styles.container, styles.wrapper]}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={[styles.picker.titleContainer, { marginTop: 0 }]}>
            <MIcon name="road-variant" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Chọn tuyến xe</Text>
            </View>
          </View>
          {routePickerVisible && (
            <CPPicker
              pickerItems={routes}
              itemValueFieldName="id"
              itemLabelFieldName="name"
              selectedValue={selectedRoute}
              enabled={submitting === false}
              textStyle={{ paddingLeft: 10 }}
              onValueChange={this.onValueChange('selectedRoute')}
            />
          )}

          <View style={styles.picker.titleContainer}>
            <MIcon name="clock-outline" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Chọn thời gian khởi hành</Text>
            </View>
          </View>
          {routePickerVisible && (
            <CPPicker
              pickerItems={routes}
              itemValueFieldName="id"
              itemLabelFieldName="name"
              selectedValue={selectedRoute}
              enabled={submitting === false}
              textStyle={{ paddingLeft: 10 }}
              onValueChange={this.onValueChange('selectedRoute')}
            />
          )}

          <View style={styles.picker.titleContainer}>
            <MIcon name="bus" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Chọn điểm lên xe</Text>
            </View>
          </View>
          {routePickerVisible && (
            <CPPicker
              pickerItems={routes}
              itemValueFieldName="id"
              itemLabelFieldName="name"
              selectedValue={selectedRoute}
              enabled={submitting === false}
              textStyle={{ paddingLeft: 10 }}
              onValueChange={this.onValueChange('selectedRoute')}
            />
          )}

          <View style={styles.picker.titleContainer}>
            <MIcon name="seat" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
            <View style={styles.container}>
              <Text style={styles.picker.title}>Chọn ghế</Text>
            </View>
          </View>
          {/* <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            {seats.map(this.renderSeatItem)}
          </View> */}
          <FlatList
            data={seats}
            numColumns={3}
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
          <Text style={styles.submit.text}>Xác nhận</Text>
        </TouchableRipple>
      </ContainerView>
    );
  }
}
