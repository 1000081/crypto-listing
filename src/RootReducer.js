import { combineReducers } from "redux";

import reducer from './reducers/index';
import coinReducer from './containers/coin/reducer';

const rootReducer = combineReducers({
    reducer,
    coinReducer
});

export default (state, action) => {
  return rootReducer(state, action);
};