import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
// import taskSaga from './task/saga';
// import campaniaSaga from './campania/saga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
