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
      case 'AddProduct':
        navigation.navigate('AddProductScreen');
        break;
      case 'RecentView':
        navigation.navigate('RecentViewScreen');
        break;
      case 'UpdateProfile':
        navigation.navigate('UpdateProfileScreen');
        break;
      case 'ChangePassword':
        navigation.navigate('ChangePasswordScreen');
        break;
      case 'Logout':
        Alert.alert('REMS', 'Bạn muốn đăng xuất?', [
          { text: 'Không' },
          {
            text: 'Có',
            onPress: logout,
          },
        ]);
        break;

      default:
        break;
    }
  };

  render = () => {
    const { loggedInUser } = this.props;

    let firstRoleName = '';

    let avatarSource = { uri: loggedInUser.avatarUrl };

    if (loggedInUser.roles instanceof Array && loggedInUser.roles.length > 0) {
      firstRoleName = loggedInUser.roles[0].name;
    }

    if (firstRoleName.length === 0) {
      firstRoleName = 'Đối tác';
    }

    if (typeof loggedInUser.avatarUrl !== 'string' || loggedInUser.avatarUrl.length === 0) {
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
                  <Text allowFontScaling style={styles.avatar.text}>{loggedInUser.fullname}</Text>
                </View>
              </View>
              <View style={styles.item.container}>
                <MIcon name="email" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>{loggedInUser.email}</Text>
                </View>
              </View>
              {/* <View style={[styles.item.container, { borderBottomWidth: 0 }]}>
                <MIcon name="briefcase" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>{firstRoleName}</Text>
                </View>
              </View> */}
            </View>
            <View style={[styles.shadow, styles.itemContainer, { marginTop: 8 }]}>
              {/* <TouchableRipple style={styles.item.container} onPress={this.onPressItem('AddProduct')}>
                <MIcon name="plus-circle" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Thêm bài đăng</Text>
                </View>
              </TouchableRipple> */}
              {/* <TouchableRipple style={styles.item.container} onPress={this.onPressItem('RecentView')}>
                <MIcon name="history" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Xem gần đây</Text>
                </View>
              </TouchableRipple> */}
              <TouchableRipple style={styles.item.container} onPress={this.onPressItem('UpdateProfile')}>
                <MIcon name="wrench" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Cập nhật thông tin</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple style={styles.item.container} onPress={this.onPressItem('ChangePassword')}>
                <MIcon name="lock" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Đổi mật khẩu</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple style={[styles.item.container, { borderBottomWidth: 0 }]} onPress={this.onPressItem('Logout')}>
                <MIcon name="logout-variant" size={26} color={Colors.LIGHT_BLACK} />
                <View style={styles.item.textContainer}>
                  <Text allowFontScaling style={styles.item.text}>Đăng xuất</Text>
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
