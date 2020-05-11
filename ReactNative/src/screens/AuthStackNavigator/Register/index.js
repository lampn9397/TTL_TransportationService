import React from 'react';
import { View, Text } from 'react-native';

// Components

// Variables
import styles from './styles';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
      </View>
    );
  }
}
