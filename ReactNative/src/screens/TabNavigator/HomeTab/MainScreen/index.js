import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import CPPicker from '../../../../components/CPPicker';
import ContainerView from '../../../../components/ContainerView';
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../../utils/colors';
import { apiResponse } from '../../../../utils/constants';
import apiAxios, { routeAxios } from '../../../../utils/axios';
import ActionTypes from '../../../../redux/OrderModule/action';
// import { apiResponse } from '../../../../utils/constants';

const list = [];

for (let i = 0; i < 20; i++) {
  list.push(i);
}

class MainScreen extends React.Component {
  toDay = moment();

  scrollViewRef = React.createRef();

  constructor(props) {
    super(props);

    const routes = [
      { id: 1, name: 'Da Nang' },
      { id: 2, name: 'HCM' },
      { id: 3, name: 'Ha Noi' },
    ];

    const searchResults = [
      { id: 0, title: 'Search result 0' },
      { id: 1, title: 'Search result 1' },
      { id: 2, title: 'Search result 2' },
      { id: 3, title: 'Search result 3' },
      { id: 4, title: 'Search result 4' },
      { id: 5, title: 'Search result 5' },
    ];

    this.state = {
      routes,
      ready: false,
      searchResults,
      refreshing: false,
      searchLoading: false,
      selectedDate: this.toDay,
      destinationRoutes: routes,
      selectedRoute: routes[0],
      destinationRoutesLoading: false,
      selectedDestinationRoute: routes[0],
    };

    const { selectDate } = props;
    selectDate(this.toDay);
  }

  componentDidMount = async () => {
    const stateModel = {
      ready: true,
      refreshing: false,
    };

    try {
      const { selectStartPoint, selectEndPoint } = this.props;

      const response = await apiAxios.get('/cities/get');

      if (response.data instanceof Array && response.data.length > 0) {
        stateModel.routes = response.data;

        // eslint-disable-next-line prefer-destructuring
        stateModel.selectedRoute = stateModel.routes[0];

        selectStartPoint(stateModel.selectedRoute);

        stateModel.destinationRoutes = await this.searchDestinationRoutes(stateModel.selectedRoute);

        if (stateModel.destinationRoutes.length > 0) {
          // eslint-disable-next-line prefer-destructuring
          stateModel.selectedDestinationRoute = stateModel.destinationRoutes[0];
          selectEndPoint(stateModel.selectedDestinationRoute);
        }
      }
    } catch (error) {
      console.log(error);
    }

    this.setState(stateModel);
  }

  searchDestinationRoutes = async (endPoint) => {
    let destinationRoutes = [];

    try {
      const response = await apiAxios.post('/routes/destinationRoutes', { id: endPoint.id });

      if (response.data.status === apiResponse.status.SUCCESS) {
        destinationRoutes = response.data.data.routes;
        destinationRoutes = destinationRoutes.map((x) => ({ ...x, routeId: x.id, ...x.destination }));
      }
    } catch (error) {
      console.log(error);
    }

    return destinationRoutes;
  }

  keyExtractor = (item, index) => index.toString();

  onValueChange = (fieldName) => async (value) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state[fieldName]?.id === value) return;

    const { selectStartPoint, selectEndPoint } = this.props;

    const stateModel = {};

    if (fieldName === 'selectedRoute') {
      stateModel.destinationRoutesLoading = true;

      const { routes } = this.state;

      const selectedRoute = routes.find((x) => x.id === value);

      stateModel.selectedRoute = selectedRoute;

      selectStartPoint(stateModel.selectedRoute);
    }

    if (fieldName === 'selectedDestinationRoute') {
      const { destinationRoutes } = this.state;

      const selectedDestinationRoute = destinationRoutes.find((x) => x.id === value);

      stateModel.selectedDestinationRoute = selectedDestinationRoute;

      selectEndPoint(stateModel.selectedDestinationRoute);
    }

    this.setState(stateModel);

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    if (fieldName === 'selectedRoute') {
      stateModel.destinationRoutesLoading = false;

      const destinationRoutes = await this.searchDestinationRoutes(stateModel.selectedRoute);

      stateModel.destinationRoutes = destinationRoutes;

      if (stateModel.destinationRoutes.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        stateModel.selectedDestinationRoute = stateModel.destinationRoutes[0];
        selectEndPoint(stateModel.selectedDestinationRoute);
      }

      this.setState(stateModel);
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, this.componentDidMount);
  }

  onDateChange = (date) => {
    const { selectDate } = this.props;

    const selectedDate = moment(date, 'DD-MM-YYYY');

    this.setState({ selectedDate });

    selectDate(selectedDate);
  }

  onSearch = async () => {
    await new Promise((resolve) => this.setState({ searchLoading: true }, resolve));

    const alertModel = { title: 'Ticket booking', message: 'Fail to confirm the book the ticket' };

    const {
      selectedDate,
      selectedRoute,
      selectedDestinationRoute,
    } = this.state;

    try {
      const date = selectedDate.format('DD/MM/YYYY');

      const response = await routeAxios.post('/searchRoute', {
        date,
        startId: selectedRoute.id,
        endId: selectedDestinationRoute.id,
      });

      alertModel.message = response.data.message;

      if (response.data.status === apiResponse.status.SUCCESS) {
        const { navigation } = this.props;
        navigation.navigate('BookTicket');
        return;
      }
    } catch (error) {
      console.log('onSearch', error);
    }

    this.setState({ searchLoading: false });

    Alert.alert(alertModel.title, alertModel.message);

    // await new Promise((resolve) => setTimeout(resolve, 500));

    // this.scrollViewRef.current.scrollToEnd();
  }

  renderSearchItem = ({ item, index }) => {
    const customStyles = {
      touchable: {},
    };

    const { searchResults } = this.state;

    const isLastItem = index === searchResults.length - 1;

    if (isLastItem === false) {
      customStyles.touchable.borderBottomWidth = 1;
      customStyles.touchable.borderColor = Colors.LIGHT_GRAY;
    }

    return (
      <TouchableRipple style={[styles.search.itemTouchable, customStyles.touchable]} onPress={this.onPressSearchItem(item)}>
        <MIcon name="bus" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.search.itemIcon} />
        <View style={styles.container}>
          <Text style={styles.search.itemTitle}>{item.title}</Text>
        </View>
      </TouchableRipple>
    );
  }

  onPressSearchItem = (item) => () => {
    const { navigation } = this.props;

    navigation.navigate('BookTicket', { item });
  }

  onPressFAQ = () => {
    const { navigation } = this.props;

    navigation.navigate('FAQScreen');
  }

  render = () => {
    const {
      ready,
      routes,
      selectedDate,
      selectedRoute,
      destinationRoutes,
      destinationRoutesLoading,
      selectedDestinationRoute,
    } = this.state;

    const routePickerVisible = routes.length > 0;

    const destinationRoutePickerVisible = destinationRoutes.length > 0 && destinationRoutesLoading === false;

    const datepickerCustomStyles = {
      dateText: {
        fontSize: 16,
        color: undefined,
      },
      placeholderText: {
        fontSize: 16,
        color: undefined,
      },
      dateInput: {
        borderRadius: 5,
        borderColor: 'black',
      },
    };

    return (
      <ContainerView ready={ready} style={[styles.container, { backgroundColor: 'white' }]}>
        <ScrollView
          ref={this.scrollViewRef}
          // refreshControl={refreshControl}
          showsVerticalScrollIndicator={false}
          style={[styles.container, styles.scrollView]}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.FAQ.buttonContainer}>
            <View style={styles.container} />
            <TouchableRipple
              rippleOpacity={0.2}
              rippleColor={Colors.FUTABUS_PRIMARY}
              rippleContainerBorderRadius={45 / 2}
              style={[styles.shadow, styles.FAQ.touchable]}
              onPress={this.onPressFAQ}
            >
              <MIcon name="help" size={32} color={Colors.FUTABUS_PRIMARY} />
            </TouchableRipple>
            {/* <TouchableRipple
              rippleOpacity={0.2}
              rippleColor={Colors.FUTABUS_PRIMARY}
              rippleContainerBorderRadius={45 / 2}
              style={[styles.shadow, styles.FAQ.touchable]}
              onPress={this.onSearch}
            >
              <MIcon name="email-alert" size={28} color={Colors.FUTABUS_PRIMARY} />
            </TouchableRipple> */}
          </View>
          <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={[styles.shadow, styles.picker.container]}>
              <View style={styles.picker.titleContainer}>
                <MIcon name="map-marker" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
                <View style={styles.container}>
                  <Text style={styles.picker.title}>Start point</Text>
                </View>
              </View>
              {routePickerVisible && (
                <CPPicker
                  pickerItems={routes}
                  itemValueFieldName="id"
                  itemLabelFieldName="name"
                  selectedValue={selectedRoute.id}
                  textStyle={{ paddingLeft: 10 }}
                  onValueChange={this.onValueChange('selectedRoute')}
                />
              )}
              <View style={[styles.picker.titleContainer, { marginTop: 20 }]}>
                <MIcon name="map-marker" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
                <View style={styles.container}>
                  <Text style={styles.picker.title}>Destination point</Text>
                </View>
              </View>
              {destinationRoutesLoading && <ActivityIndicator />}
              {destinationRoutePickerVisible && (
                <CPPicker
                  pickerItems={destinationRoutes}
                  itemValueFieldName="id"
                  itemLabelFieldName="name"
                  selectedValue={selectedDestinationRoute.id}
                  textStyle={{ paddingLeft: 10 }}
                  onValueChange={this.onValueChange('selectedDestinationRoute')}
                />
              )}
            </View>
            <View style={[styles.shadow, styles.picker.container, { marginVertical: 10 }]}>
              <View style={styles.picker.titleContainer}>
                <MIcon name="calendar-range" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
                <View style={styles.container}>
                  <Text style={styles.picker.title}>Start date</Text>
                </View>
              </View>

              <DatePicker
                mode="date"
                date={selectedDate}
                showIcon={false}
                format="DD-MM-YYYY"
                cancelBtnText="Cancel"
                confirmBtnText="Confirm"
                placeholder="select date"
                style={{ width: '100%' }}
                maxDate={this.toDay.toDate()}
                customStyles={datepickerCustomStyles}
                onDateChange={this.onDateChange}
              />
            </View>

            <TouchableRipple
              rippleColor="white"
              rippleOpacity={0.2}
              rippleContainerBorderRadius={45 / 2}
              style={[styles.shadow, styles.search.searchTouchable]}
              onPress={this.onSearch}
            >
              <MIcon name="magnify" size={32} color="white" />
            </TouchableRipple>
          </View>
        </ScrollView>
      </ContainerView>
    );
  }
}

MainScreen.propTypes = {
  selectDate: PropTypes.func.isRequired,
  selectEndPoint: PropTypes.func.isRequired,
  selectStartPoint: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch({ type: ActionTypes.SELECT_DATE, date }),
  selectEndPoint: (point) => dispatch({ type: ActionTypes.SELECT_END_POINT, point }),
  selectStartPoint: (point) => dispatch({ type: ActionTypes.SELECT_START_POINT, point }),
});

export default connect(null, mapDispatchToProps)(MainScreen);
