import {all, fork} from 'redux-saga/effects';

function* checkAuthoritazion() {
  return '';
}

export default function* rootSaga() {
  yield all([fork(checkAuthoritazion)]);
}
