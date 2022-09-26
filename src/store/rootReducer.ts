import { combineReducers } from 'redux';

import { watchListReducer } from '../features/coins/store/slices/watchListSlice';

export const rootReducer = combineReducers({
  watchList: watchListReducer,
});
