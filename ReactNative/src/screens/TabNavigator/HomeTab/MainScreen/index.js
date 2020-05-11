import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  // RefreshControl,
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
import apiAxios from '../../../../utils/axios';
import { apiResponse } from '../../../../utils/constants';
// import { apiResponse } from '../../../../utils/constants';

const list = [];

for (let i = 0; i < 20; i++) {
  list.push(i);
}

export default class MainScreen extends React.Component {
  toDay = new Date();

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
      selectedRoute: routes[0].id,
      destinationRoutesLoading: false,
      selectedDestinationRoute: routes[0].id,
    };
  }

  componentDidMount = async () => {
    const stateModel = {
      ready: true,
      refreshing: false,
    };

    try {
      const response = await apiAxios.get('/cities/get');

      stateModel.routes = response.data;

      stateModel.selectedRoute = stateModel.routes?.[0].id;

      stateModel.destinationRoutes = await this.searchDestinationRoutes(stateModel.selectedRoute);

      if (stateModel.destinationRoutes.length > 0) {
        stateModel.selectedDestinationRoute = stateModel.destinationRoutes[0].id;
      }
    } catch (error) {
      console.log(error);
    }

    this.setState(stateModel);
  }

  searchDestinationRoutes = async (startRouteId) => {
    let destinationRoutes = [];

    try {
      const response = await apiAxios.post('/routes/destinationRoutes', { id: startRouteId });

      if (response.data.status === apiResponse.status.SUCCESS) {
        destinationRoutes = response.data.data.routes;
        destinationRoutes = destinationRoutes.map((x) => ({ ...x, ...x.destination }));
      }
    } catch (error) {
      console.log(error);
    }

    return destinationRoutes;
  }

  keyExtractor = (item, index) => index.toString();

  onValueChange = (fieldName) => async (value) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state[fieldName] === value) return;

    const stateModel = { [fieldName]: value };

    if (fieldName === 'selectedRoute') {
      stateModel.destinationRoutesLoading = true;
    }

    this.setState(stateModel);

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    if (fieldName === 'selectedRoute') {
      stateModel.destinationRoutesLoading = false;

      const destinationRoutes = await this.searchDestinationRoutes(value);

      stateModel.destinationRoutes = destinationRoutes;

      if (stateModel.destinationRoutes.length > 0) {
        stateModel.selectedDestinationRoute = stateModel.destinationRoutes[0].id;
      }

      this.setState(stateModel);
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, this.componentDidMount);
  }

  onDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  onSearch = async () => {
    await new Promise((resolve) => this.setState({ searchLoading: true }, resolve));

    await new Promise((resolve) => setTimeout(resolve, 3000));

    this.setState({ searchLoading: false });

    await new Promise((resolve) => setTimeout(resolve, 500));

    this.scrollViewRef.current.scrollToEnd();
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

  render = () => {
    const {
      ready,
      routes,
      // refreshing,
      selectedDate,
      searchLoading,
      selectedRoute,
      searchResults,
      destinationRoutes,
      destinationRoutesLoading,
      selectedDestinationRoute,
    } = this.state;

    const routePickerVisible = routes.length > 0;

    const destinationRoutePickerVisible = destinationRoutes.length > 0 && destinationRoutesLoading === false;

    const searchResultVisible = searchResults.length > 0;

    // const refreshControl = <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />;

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
      <ContainerView ready={ready} style={styles.container}>
        <ScrollView
          ref={this.scrollViewRef}
          // refreshControl={refreshControl}
          showsVerticalScrollIndicator={false}
          style={[styles.container, styles.scrollView]}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={[styles.shadow, styles.picker.container]}>
            <View style={styles.picker.titleContainer}>
              <MIcon name="map-marker" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
              <View style={styles.container}>
                <Text style={styles.picker.title}>Điểm khởi hành</Text>
              </View>
            </View>
            {routePickerVisible && (
              <CPPicker
                pickerItems={routes}
                itemValueFieldName="id"
                itemLabelFieldName="name"
                selectedValue={selectedRoute}
                textStyle={{ paddingLeft: 10 }}
                onValueChange={this.onValueChange('selectedRoute')}
              />
            )}
            <View style={[styles.picker.titleContainer, { marginTop: 20 }]}>
              <MIcon name="map-marker" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
              <View style={styles.container}>
                <Text style={styles.picker.title}>Điểm đến</Text>
              </View>
            </View>
            {destinationRoutesLoading && <ActivityIndicator />}
            {destinationRoutePickerVisible && (
              <CPPicker
                pickerItems={destinationRoutes}
                itemValueFieldName="id"
                itemLabelFieldName="name"
                selectedValue={selectedDestinationRoute}
                textStyle={{ paddingLeft: 10 }}
                onValueChange={this.onValueChange('selectedDestinationRoute')}
              />
            )}
          </View>
          <View style={[styles.shadow, styles.picker.container, { marginVertical: 10 }]}>
            <View style={styles.picker.titleContainer}>
              <MIcon name="calendar-range" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.picker.titleIcon} />
              <View style={styles.container}>
                <Text style={styles.picker.title}>Ngày khởi hành</Text>
              </View>
            </View>

            <DatePicker
              style={{ width: '100%' }}
              date={selectedDate}
              mode="date"
              showIcon={false}
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate={this.toDay}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
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

          <ContainerView ready={searchLoading === false} style={[styles.container, styles.shadow, styles.search.wrapper]}>
            {searchResultVisible && (
              <FlatList
                data={searchResults}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderSearchItem}
                contentContainerStyle={styles.search.flatList}
              />
            )}
          </ContainerView>
        </ScrollView>
      </ContainerView>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
