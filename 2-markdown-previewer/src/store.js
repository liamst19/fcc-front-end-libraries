import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import textReducer from './reducers/textReducer.js';

const reducer = combineReducers({
  text: textReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
