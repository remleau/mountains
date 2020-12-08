import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducerMountains } from './reducerMountains.js';
import { reducerUsers } from './reducerUsers.js';


const initStore = (initialState, options) => {
  const store = createStore(
    combineReducers({
      users: reducerUsers,
      mountains: reducerMountains,
    }),
    applyMiddleware(thunk)
  )

  return store;
}

export default initStore;