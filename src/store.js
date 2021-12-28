import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger, { Logger } from 'redux-logger';
import rootSaga from './RootSagas';
import rootReducer from './RootReducer'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSIOM_COMPOSE__  ? window._REDUX_DEVTOOLS_EXTENSIOM_COMPOSE__ ({}) : compose;

const middlewareList = [ applyMiddleware (sagaMiddleware)];

if( process.env.NODE_ENV === 'development') {
    middlewareList.push(applyMiddleware(logger));
}

export const store = createStore (
    rootReducer,
    composeEnhancers(...middlewareList)
);

sagaMiddleware.run(rootSaga);