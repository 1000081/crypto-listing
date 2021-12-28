import { takeEvery } from 'redux-saga';
import { put, takeLatest, all, fork } from 'redux-saga/effects';
import { getPromotedCoinsResult } from './action';


function* fetchPromtedCoins() {
  try {
    const payload = yield fetch('http://localhost:8010/proxy/api/coins')
      .then(response => response.json());
    yield put(getPromotedCoinsResult(true, payload));
  } catch (error) {
    console.log('Error-------' + error);
    yield put(getPromotedCoinsResult(false, "Exception occured while fetch coins"));
  }

}

function* watchGetPromotedCoins() {
  yield takeLatest('GET_PROMOTED_COINS', fetchPromtedCoins)
}

export const coinSaga = [fork(watchGetPromotedCoins)];

