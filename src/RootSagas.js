import { all } from 'redux-saga/effects';

import { coinSaga } from './containers/coin/sagas';
import { newsSaga } from './sagas/index';

export default function* rootSaga() {
    yield all ([
        ...coinSaga,
        ...newsSaga
    ]);
}