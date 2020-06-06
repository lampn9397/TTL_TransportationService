import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

// Components
import ContainerView from '../../../../components/ContainerView';
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';
import Colors from '../../../../utils/colors';
import ActionTypes from '../../../../redux/AuthModule/action';
import avatarPlaceholder from '../../../../assets/images/user.png';

class MainScreen extends React.Component {
  onPressItem = (itemName) => () => {
    const { navigation, logout } = this.props;
    switch (itemName) {
      case 'Logout':
        Alert.alert('Transportation Service', 'You want to logout?', [
          { text: 'No' },
          {
            text: 'Yes',
            onPress: logout,
          },
        ]);
        break;

      default:
        navigation.navigate(itemName);
        break;
    }
  };

  render = () => {
    const { loggedInUser } = this.props;

    let avatarSource = { uri: loggedInUser.user.avatarUrl };

    if (typeof avatarSource.uri !== 'string' || avatarSource.uri.length === 0) {
      avatarSource = avatarPlaceholder;
    }

    return (
      <React.Fragment>
        <ContainerView ready style={[styles.container, { backgroundColor: 'white' }]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContentContainer}
          >
            <View style={[styles.shadow, styles.itemContainer]}>
              <View style={[styles.item.container, { justifyContent: 'center' }]}>
                <View style={{ alignItems: 'center' }}>
                  <View style={[styles.shadow, styles.avatar.container]}>
                    <Image source={avatarSource} style={styles.avatar.image} />
                  </View>
                  <Text allowFontScaling style={styles.avatar.text}>{loggedInUser.user.fullname}</Text>
                </View>
              </View>
              <View style={[styles.item.container, { borderBottomWidth: 0 }]}>
                <MIcon name="phone" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>{loggedInUser.user.phonenumber}</Text>
                </View>
              </View>
              <View style={styles.item.container}>
                <MIcon name="email" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>{loggedInUser.user.email}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.shadow, styles.itemContainer, { marginTop: 8 }]}>
              {/* <TouchableRipple style={styles.item.container} onPress={this.onPressItem('AddProduct')}>
                <MIcon name="plus-circle" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Thêm bài đăng</Text>
                </View>
              </TouchableRipple> */}
              <TouchableRipple style={styles.item.container} onPress={this.onPressItem('TicketHistoryScreen')}>
                <MIcon name="ticket" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Booked tickets</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple style={styles.item.container} onPress={this.onPressItem('ChangePasswordScreen')}>
                <MIcon name="lock" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Change password</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple style={styles.item.container} onPress={this.onPressItem('UpdateProfileScreen')}>
                <MIcon name="wrench" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Update profile</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple style={[styles.item.container, { borderBottomWidth: 0 }]} onPress={this.onPressItem('Logout')}>
                <MIcon name="logout-variant" size={26} color={Colors.FUTABUS_PRIMARY} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Logout</Text>
                </View>
              </TouchableRipple>
            </View>
          </ScrollView>
        </ContainerView>
      </React.Fragment>
    );
  };
}

MainScreen.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedInUser: PropTypes.instanceOf(Object),
  navigation: PropTypes.instanceOf(Object).isRequired,
};

MainScreen.defaultProps = {
  loggedInUser: null,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.loggedInUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: ActionTypes.AUTH_LOGOUT_HANDLING }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
