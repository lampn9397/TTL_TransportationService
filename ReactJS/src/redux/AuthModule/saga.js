import { put, takeLeading } from 'redux-saga/effects';
import CryptoJS from 'crypto-js';

// Variables
import ActionTypes from './action';
import { apiResponse } from '../../utils/constants';
import { userAxios } from '../../utils/axios';

function* AUTH_LOGIN(action) {
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

export default function* sagas() {
  yield takeLeading(ActionTypes.AUTH_LOGIN, AUTH_LOGIN);
}