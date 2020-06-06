import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components

// Variables
import styles from './styles';
import apiAxios from '../../../utils/axios';
import { apiResponse } from '../../../utils/constants';
import Colors from '../../../utils/colors';

const FAQScreen = () => {
  const [state, setState] = React.useState({
    faqs: [],
    ready: false,
    refreshing: false,
  });

  const getFAQ = async () => {
    const stateModel = {
      ready: true,
      refreshing: false,
      faqs: state.faqs,
    };

    try {
      const response = await apiAxios.get('/users/faqs/get');

      if (response.data.status === apiResponse.status.SUCCESS) {
        stateModel.faqs = response.data.data;
      }
    } catch (error) {
      console.log(error);
    }
    setState(stateModel);
  };

  React.useEffect(() => {
    getFAQ();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item.container}>
        <MIcon name="star" size={24} color={Colors.FUTABUS_PRIMARY} style={styles.item.icon} />
        <View style={styles.container}>
          <Text style={styles.item.title}>{item.name}</Text>
          <Text style={styles.item.content}>{item.fcontent}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  const onRefresh = () => {
    setState({ ...state, refreshing: true });
    getFAQ();
  };

  const refreshControl = <RefreshControl refreshing={state.refreshing} onRefresh={onRefresh} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={state.faqs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={refreshControl}
      />
    </View>
  );
};

export default FAQScreen;
