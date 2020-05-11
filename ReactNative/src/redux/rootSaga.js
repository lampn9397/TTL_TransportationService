import { all, fork } from 'redux-saga/effects';
import authSagas from './AuthModule/saga';

export default function* rootSagas() {
  yield all([
    fork(authSagas),
  ]);
}
