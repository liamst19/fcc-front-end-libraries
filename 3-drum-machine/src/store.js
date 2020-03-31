import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import drumReducer from './reducers/drumReducer';
import displayReducer from './reducers/displayReducer';

const reducer = combineReducers({
  pads: drumReducer,
  display: displayReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
