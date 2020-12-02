import { combineReducers, createStore } from "redux";
import reducerMountains from './reducerMountains.js';

const initStore = (initialState, options) => {
  const store = createStore(
    combineReducers({
      mountains: reducerMountains
    })
  )

  return store;
}

export default initStore;