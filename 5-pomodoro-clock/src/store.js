import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import timerReducer from './reducers/timerReducer';

const reducer = combineReducers({
  timer: timerReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
