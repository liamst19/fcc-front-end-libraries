import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import calcReducer from './reducers/calcReducer';

const reducer = combineReducers({
  calculator: calcReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
