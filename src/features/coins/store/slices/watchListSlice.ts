import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export interface WatchListState {
  coinsIds: string[];
}

const initialState: WatchListState = {
  coinsIds: [],
};

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addCoinToWatchList: (state, action: PayloadAction<string>) =>
      produce(state, draft => {
        const { payload } = action;
        draft.coinsIds.push(payload);
      }),
    removeCoinFromWatchList: (state, action: PayloadAction<string>) =>
      produce(state, draft => {
        const { payload } = action;
        const index = draft.coinsIds.indexOf(payload);
        if (index > -1) {
          draft.coinsIds.splice(index, 1);
        }
      }),
  },
});

export const { addCoinToWatchList, removeCoinFromWatchList } =
  watchListSlice.actions;

export const watchListReducer = watchListSlice.reducer;
