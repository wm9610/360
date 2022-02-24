import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);

export default store;
