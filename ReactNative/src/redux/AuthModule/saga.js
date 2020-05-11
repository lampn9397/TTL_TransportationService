import CryptoJS from 'crypto-js';
import { Alert } from 'react-native';
import { put, call, takeLeading } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

// Variables
import ActionTypes from './action';
import { userAxios } from '../../utils/axios';
import { apiResponse, asyncStorageKey } from '../../utils/constants';

// eslint-disable-next-line import/no-cycle
import store from '../store';

function* AUTH_LOGIN(action) {
  yield put({
    type: ActionTypes.AUTH_LOGIN_SUCCESS,
    loggedInUser: {
      fullname: 'Phan Ngoc Lam',
      email: 'lampn9397@gmail.com',
    },
  });
  return;
  let alertMessage = 'Đăng nhập không thành công';
  try {
    const body = {
      username: action.username,
      password: CryptoJS.MD5(action.password).toString(),
    };
    console.log("TCL: function*AUTH_LOGIN -> body", body)

    const response = yield userAxios.post('/login', body);

    alertMessage = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {

    }

  } catch (error) {
    console.log(error);
  }
  alert(alertMessage);

  yield put({ type: ActionTypes.AUTH_LOGIN_SUCCESS });
}

function* AUTH_CHECK_ASYNC_STORAGE() {
  let user = yield AsyncStorage.getItem(asyncStorageKey.USER);
  // console.log("TCL: function*AUTH_CHECK_ASYNC_STORAGE -> user", user)

  if (user) {
    user = JSON.parse(user);
    // console.log("TCL: function*AUTH_CHECK_ASYNC_STORAGE -> user", user)

    const data = {
      email: user.username,
      password: user.password,
    };

    yield call(AUTH_LOGIN, { data });
    return;
  }
  yield put({ type: ActionTypes.AUTH_CHECK_ASYNC_STORAGE_DONE });
}

function* AUTH_UPDATE_PROFILE(payload) {
  yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_SUCCESS, loggedInUser: {} });
  return;

  const { data } = payload;
  let isValid = true;
  const alertModel = { title: 'REMS', message: 'Cập nhật thông tin thành công.' };
  // p_API_REMS_Users_ChangeInfo_V1

  if (data.fullname.length === 0) {
    isValid = false;
    alertModel.message = 'Vui lòng nhập họ tên.';
  }

  if (isValid === false) {
    Alert.alert(alertModel.title, alertModel.message);
    yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
    return;
  }

  const { loggedInUser } = store.getState().authReducer.loginReducer;

  try {
    const response = yield dynamicAxios.execute().post('', {
      sqlCommand: 'p_API_REMS_Users_ChangeInfo',
      parameters: {
        UserId: loggedInUser.id,
        NewFullName: data.fullname,
      },
    });
    // console.log("TCL: function*AUTH_UPDATE_PROFILE -> response", response)

    if (response.data.ok) {
      alertModel.message = 'Cập nhật thông tin thành công';
      alertModel.buttons = [{
        text: 'OK',
        onPress: () => NavigationService.dispatch(StackActions.pop()),
      }];
      Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, { cancelable: false });

      yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_SUCCESS, loggedInUser: data });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  Alert.alert(alertModel.title, alertModel.message);
  yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
}

function* AUTH_UPDATE_PASSWORD(payload) {
  // console.log("TCL: function*AUTH_UPDATE_PASSWORD -> payload", payload)
  // const { data: loggedInUser } = action;
  const { data } = payload;
  let isValid = true;
  const alertModel = { title: 'REMS', message: 'Đổi mật khẩu không thành công.' };

  //   oldPassword
  // newPassword
  // reNewPassword

  if (isValid && data.oldPassword.length === 0) {
    isValid = false;
    alertModel.message = 'Vui lòng nhập mật khẩu cũ.';
  }

  if (isValid && data.newPassword.length === 0) {
    isValid = false;
    alertModel.message = 'Vui lòng nhập mật khẩu mới.';
  }

  if (isValid && data.reNewPassword.length === 0) {
    isValid = false;
    alertModel.message = 'Vui lòng nhập lại mật khẩu mới.';
  }

  if (isValid && data.newPassword !== data.reNewPassword) {
    isValid = false;
    alertModel.message = 'Mật khẩu mới không trùng khớp';
  }

  if (isValid === false) {
    Alert.alert(alertModel.title, alertModel.message);
    yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_FAIL });
    return;
  }

  const { loggedInUser } = store.getState().authReducer;

  yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS, password: loggedInUser.password });

  return;

  try {
    const response = yield dynamicAxios.execute().post('', {
      sqlCommand: 'p_API_REMS_Users_ChangePass',
      parameters: {
        userid: loggedInUser.id,
        oldpassword: data.oldPassword,
        newpassword: data.newPassword,
      },
    });

    if (response.data.ok) {
      loggedInUser.password = data.newPassword;
      AsyncStorage.setItem(asyncStorageKey.Customer, JSON.stringify(loggedInUser));

      alertModel.message = 'Đổi mật khẩu thành công.';
      alertModel.buttons = [{
        text: 'OK',
        onPress: () => NavigationService.dispatch(StackActions.pop()),
      }];

      Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, { cancelable: false });
      yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS, password: data.newPassword });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  Alert.alert(alertModel.title, alertModel.message);
  yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_FAIL });
}

function* AUTH_LOGOUT() {
  // Clear AsyncStorage
  yield AsyncStorage.removeItem(asyncStorageKey.USER);

  yield put({ type: ActionTypes.AUTH_LOGOUT_DONE });
}

export default function* sagas() {
  yield takeLeading(ActionTypes.AUTH_LOGIN, AUTH_LOGIN);
  yield takeLeading(ActionTypes.AUTH_LOGOUT_HANDLING, AUTH_LOGOUT);
  yield takeLeading(ActionTypes.AUTH_UPDATE_PROFILE, AUTH_UPDATE_PROFILE);
  yield takeLeading(ActionTypes.AUTH_UPDATE_PASSWORD, AUTH_UPDATE_PASSWORD);
  yield takeLeading(ActionTypes.AUTH_CHECK_ASYNC_STORAGE, AUTH_CHECK_ASYNC_STORAGE);
}
