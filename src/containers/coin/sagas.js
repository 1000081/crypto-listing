import { put, takeLatest, all, fork } from 'redux-saga/effects';
import { getPromotedCoinsResult, updateCoinsResult, addCoinsResult } from './action';
import * as types from "../../components/action-types";


function* fetchPromtedCoins() {
  try {
    const payload = yield fetch('http://localhost:8010/proxy/api/coins')
      .then(response => response.json());
    yield put(getPromotedCoinsResult(true, payload));
  } catch (error) {
    console.log('Error-------' + error);
    yield put(getPromotedCoinsResult(false, "Exception occured while fetch coins"));
  }

};

function* addCoins(request) {
  try {
    console.log('REquest...................'+request.payload);
    const payload = yield fetch('http://localhost:8010/proxy/api/coins', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.payload),
    }).then(response => response.json());
    yield put(addCoinsResult(true, {updateMessage:"Added Successfully", status:true}));
  } catch (error) {
    console.log('Error-------' + error);
    yield put(addCoinsResult(false, "Exception occured while save coins"));
  }

};

function* updateCoins(request) {
  try {
    console.log('REquest...................'+request.payload);
    const payload = yield fetch('http://localhost:8010/proxy/api/coins/'+request.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.payload),
    }).then(response => response.json());
    yield put(updateCoinsResult(true, {updateMessage:"Updated Successfully", status:true}));
  } catch (error) {
    console.log('Error-------' + error);
    yield put(updateCoinsResult(false, "Exception occured Update fetch coins"));
  }

};


function* watchGetPromotedCoins() {
  yield takeLatest(types.GET_PROMOTED_COINS, fetchPromtedCoins),
  yield takeLatest(types.ADD_COINS, addCoins),
  yield takeLatest(types.UPDATE_COINS, updateCoins)
}

export const coinSaga = [fork(watchGetPromotedCoins)];

