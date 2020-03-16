import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

// Components
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';

const list = [];

for (let i = 0; i < 20; i++) {
  list.push(i);
}

export default class MainScreen extends React.Component {
  renderItem = ({ item, index }) => {
    const isLastItem = index === list.length - 1;

    const customStyles = {
      container: {},
    };

    if (isLastItem === false) {
      customStyles.container.marginBottom = 0;
    }

    return (
      <TouchableRipple style={[styles.shadow, styles.item.container, customStyles.container]} onPress={this.onPressItem(item)}>
        <View style={styles.item.subContainer}>
          <Image source={{ uri: 'https://picsum.photos/seed/picsum/300/200' }} style={{ height: 200 }} />
          <View style={styles.item.bodyContainer}>
            <Text>{`Lorem ipsum ${item}`}</Text>
          </View>
        </View>
      </TouchableRipple>
    );
  }

  keyExtractor = (item, index) => index.toString();

  onPressItem = (item) => () => {
    console.log(item);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
