import { createStore, compose, applyMiddleware } from 'redux';
import chatReducer from '../reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const chatStore = createStore(
    chatReducer,
    composeEnhancers(applyMiddleware())
);

export default chatStore;