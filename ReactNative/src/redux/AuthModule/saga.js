import CryptoJS from 'crypto-js';
import { Alert } from 'react-native';
import { put, takeLeading } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

// Variables
import ActionTypes from './action';
import apiAxios from '../../utils/axios';
import { navigationRef, apiResponse, asyncStorageKey } from '../../utils/constants';

// eslint-disable-next-line import/no-cycle
import store from '../store';

function* AUTH_LOGIN(action) {
  // console.log("function*AUTH_LOGIN -> action", action)
  // yield put({
  //   type: ActionTypes.AUTH_LOGIN_SUCCESS,
  //   loggedInUser: {
  //     user: {
  //       fullname: 'Phan Ngoc Lam',
  //       email: 'lampn9397@gmail.com',
  //     },
  //   },
  // });
  // return;

  let alertMessage = 'Failed to login, please try again later.';

  const fields = ['username', 'password'];

  const invalidFieldIndex = fields.findIndex((x) => action.data[x].length === 0);

  if (invalidFieldIndex > -1) {
    alertMessage = `Please input ${fields[invalidFieldIndex]}.`;

    Alert.alert('Login', alertMessage);

    yield put({ type: ActionTypes.AUTH_LOGIN_ERROR });
    return;
  }

  try {
    const body = {
      username: action.data.username,
      password: CryptoJS.MD5(action.data.password).toString(),
    };

    const response = yield apiAxios.post('/users/login', body);

    alertMessage = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {
      const asyncStorageValue = JSON.stringify({
        username: action.data.username,
        password: action.data.password,
      });

      AsyncStorage.setItem(asyncStorageKey.USER, asyncStorageValue);

      yield put({
        type: ActionTypes.AUTH_LOGIN_SUCCESS,
        loggedInUser: response.data.data,
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
  Alert.alert('Login', alertMessage);

  yield put({ type: ActionTypes.AUTH_LOGIN_ERROR });
}

function* AUTH_REGISTER(action) {
  const alertModel = {
    title: 'Register',
    message: 'Failed to register, please try again later.',
    buttons: [{ text: 'OK' }],
    options: { cancelable: false },
  };

  const fields = ['username', 'password', 'rePassword', 'email', 'fullname'];

  const invalidFieldIndex = fields.findIndex((x) => action.data[x].length === 0);

  if (invalidFieldIndex > -1) {
    alertModel.message = `Please input ${fields[invalidFieldIndex]}.`;

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

    yield put({ type: ActionTypes.AUTH_REGISTER_ERROR });
    return;
  }

  if (action.data.password !== action.data.rePassword) {
    alertModel.message = 'Password mismatch';

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
    return;
  }

  try {
    const body = {
      username: action.data.username,
      password: action.data.password,
      email: action.data.email,
      fullname: action.data.fullname,
    };

    const response = yield apiAxios.post('/users/register', body);

    alertModel.message = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {
      yield new Promise((resolve) => {
        alertModel.buttons[0].onPress = resolve;

        Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
      });

      yield put({
        type: ActionTypes.AUTH_REGISTER_SUCCESS,
        loggedInUser: response.data.data,
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

  yield put({ type: ActionTypes.AUTH_REGISTER_ERROR });
}

function* AUTH_CHECK_ASYNC_STORAGE() {
  let user = yield AsyncStorage.getItem(asyncStorageKey.USER);
  // console.log("TCL: function*AUTH_CHECK_ASYNC_STORAGE -> user", user)

  if (user) {
    user = JSON.parse(user);
    // console.log("TCL: function*AUTH_CHECK_ASYNC_STORAGE -> user", user)

    const data = {
      username: user.username,
      password: user.password,
    };

    yield put({ type: ActionTypes.AUTH_LOGIN, data });
    return;
  }
  yield put({ type: ActionTypes.AUTH_CHECK_ASYNC_STORAGE_DONE });
}

function* AUTH_UPDATE_PROFILE(action) {
  //   address
  // birthday
  // gender
  // idCard
  // phonenumber

  const alertModel = {
    title: 'Update profile',
    message: 'Failed to update profile, please try again later.',
    buttons: [{ text: 'OK' }],
    options: { cancelable: false },
  };

  const fields = ['address', 'birthday', 'gender', 'idCard', 'phoneNumber'];

  const invalidFieldIndex = fields.findIndex((x) => action.data[x].length === 0);

  if (invalidFieldIndex > -1) {
    alertModel.message = `Please input ${fields[invalidFieldIndex]}.`;

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

    yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
    return;
  }

  if (action.data.idCard.length !== 9) {
    alertModel.message = 'Id card invalid. Must be 9 numbers.';

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

    yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
    return;
  }

  if (action.data.phoneNumber.length !== 10) {
    alertModel.message = 'Phone number invalid. Must be 10 numbers.';

    Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

    yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
    return;
  }

  const { loggedInUser } = store.getState().authReducer;

  try {
    const body = {
      customerId: loggedInUser.user.id,
      accountId: loggedInUser.account.id,
      address: action.data.address,
      birthday: action.data.birthday.format('DD/MM/YYYY'),
      gender: action.data.gender,
      idCard: action.data.idCard,
      phoneNumber: action.data.phoneNumber,
    };
    // console.log("function*AUTH_UPDATE_PROFILE -> body", body)

    const response = yield apiAxios.post('/users/update', body);
    // console.log("function*AUTH_UPDATE_PROFILE -> response", response)

    alertModel.message = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {
      yield new Promise((resolve) => {
        alertModel.buttons[0].onPress = resolve;

        Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
      });

      if (action.data.screen === 'UpdateProfileScreen') {
        navigationRef.current.goBack();
      }

      yield put({
        type: ActionTypes.AUTH_UPDATE_PROFILE_SUCCESS,
        loggedInUser: response.data.data,
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

  yield put({ type: ActionTypes.AUTH_UPDATE_PROFILE_FAIL });
}

function* AUTH_UPDATE_PASSWORD(payload) {
  const { data } = payload;

  let isValid = true;

  const alertModel = {
    title: 'Change password',
    message: 'Failed to change password.',
    buttons: [{ text: 'OK' }],
    options: { cancelable: false },
  };

  //   oldPassword
  // newPassword
  // reNewPassword

  if (isValid && data.oldPassword.length === 0) {
    isValid = false;
    alertModel.message = 'Please input current password.';
  }

  if (isValid && data.newPassword.length === 0) {
    isValid = false;
    alertModel.message = 'Please input new password.';
  }

  if (isValid && data.newPassword !== data.reNewPassword) {
    isValid = false;
    alertModel.message = 'The new password mismatch.';
  }

  if (isValid === false) {
    Alert.alert(alertModel.title, alertModel.message);
    yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_FAIL });
    return;
  }

  const { loggedInUser } = store.getState().authReducer;

  try {
    const response = yield apiAxios.post('/users/changePassword', {
      accountId: loggedInUser.account.id,
      password: data.oldPassword,
      newPassword: data.newPassword,
    });

    alertModel.message = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {
      const asyncStorageValue = JSON.stringify({
        username: loggedInUser.account.username,
        password: data.newPassword,
      });

      AsyncStorage.setItem(asyncStorageKey.USER, asyncStorageValue);

      yield new Promise((resolve) => {
        alertModel.buttons[0].onPress = resolve;

        Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
      });

      yield put({ type: ActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS });

      navigationRef.current.goBack();
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

function* AUTH_REGISTER_VERIFY_CODE(action) {
  const alertModel = {
    title: 'Verify code',
    message: 'Failed to verify code.',
    buttons: [{ text: 'OK' }],
    options: { cancelable: false },
  };

  try {
    const { code } = action;

    const response = yield apiAxios.post('users/verify', { code });

    alertModel.message = response.data.message;

    if (response.data.status === apiResponse.status.SUCCESS) {
      yield new Promise((resolve) => {
        alertModel.buttons[0].onPress = resolve;

        Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);
      });

      const { loggedInUser } = store.getState().authReducer;

      yield put({
        type: ActionTypes.AUTH_REGISTER_VERIFY_CODE_SUCCESS,
        loggedInUser: {
          ...loggedInUser,
          Status: 'UPDATING',
        },
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  Alert.alert(alertModel.title, alertModel.message, alertModel.buttons, alertModel.options);

  yield put({ type: ActionTypes.AUTH_REGISTER_VERIFY_CODE_ERROR });
}

export default function* sagas() {
  yield takeLeading(ActionTypes.AUTH_LOGIN, AUTH_LOGIN);
  yield takeLeading(ActionTypes.AUTH_REGISTER, AUTH_REGISTER);
  yield takeLeading(ActionTypes.AUTH_REGISTER_VERIFY_CODE, AUTH_REGISTER_VERIFY_CODE);
  yield takeLeading(ActionTypes.AUTH_LOGOUT_HANDLING, AUTH_LOGOUT);
  yield takeLeading(ActionTypes.AUTH_UPDATE_PROFILE, AUTH_UPDATE_PROFILE);
  yield takeLeading(ActionTypes.AUTH_UPDATE_PASSWORD, AUTH_UPDATE_PASSWORD);
  yield takeLeading(ActionTypes.AUTH_CHECK_ASYNC_STORAGE, AUTH_CHECK_ASYNC_STORAGE);
}
