import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
} from 'react-native';

// Components
import ContainerView from '../../../components/ContainerView';

// Variables
import styles from './styles';
import apiAxios from '../../../utils/axios';
import { apiResponse } from '../../../utils/constants';
import TouchableRipple from '../../../components/TouchableRipple';
import Colors from '../../../utils/colors';

class TicketHistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ready: false,
      refreshing: false,
    };
  }

  componentDidMount = async () => {
    const stateModel = {
      data: [],
      ready: true,
      refreshing: false,
    };

    const { loggedInUser } = this.props;

    try {
      const response = await apiAxios.post('/tickets/history', { customerId: loggedInUser.user.id });

      if (response.data.status === apiResponse.status.SUCCESS) {
        stateModel.data = response.data.data;
      }
    } catch (error) {
      console.log(error);
    }

    this.setState(stateModel);
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, this.componentDidMount);
  }

  onPressItem = (item) => () => {
    const { navigation } = this.props;
    navigation.navigate('TicketDetail', { item });
  }

  renderItem = ({ item, index }) => {
    const customStyles = {};

    if (index !== 0) {
      customStyles.touchable = { marginTop: 0 };
    }

    return (
      <TouchableRipple style={[styles.shadow, styles.item.touchable, customStyles.touchable]} onPress={this.onPressItem(item)}>
        <View style={styles.item.row}>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="ticket" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{item.ticketnumber}</Text>
            </View>
          </View>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="cash" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{item.price}</Text>
            </View>
          </View>
        </View>
        <View style={styles.item.row}>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="seat" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{item.seat}</Text>
            </View>
          </View>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="map-marker" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{`${item.startPoint} - ${item.endPoint} (${item.busStop})`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.item.row, { marginBottom: 0 }]}>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="train-car" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{item.vehiclePlate}</Text>
            </View>
          </View>
          <View style={[styles.container, styles.item.fieldContainer]}>
            <MIcon name="clock" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
            <View style={styles.container}>
              <Text>{`${item.timestart} ${moment(item.datestart).format('DD/MM/YYYY')}`}</Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
    );
  }

  keyExtractor = (item, index) => index.toString();

  render = () => {
    const { data, ready, refreshing } = this.state;

    const refreshControl = <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />;

    return (
      <ContainerView ready={ready} style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          refreshControl={refreshControl}
          keyExtractor={this.keyExtractor}
        />
      </ContainerView>
    );
  }
}

TicketHistoryScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  loggedInUser: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.loggedInUser,
});

export default connect(mapStateToProps)(TicketHistoryScreen);
