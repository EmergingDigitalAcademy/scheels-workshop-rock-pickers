import { createStore, combineReducers } from 'redux';
import count from '../reducers/count';

const store = createStore(
  combineReducers({
    count,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
