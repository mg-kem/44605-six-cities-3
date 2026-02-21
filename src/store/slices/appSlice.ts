import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity, TSortingType } from '../../types/types';
import { Cities } from '../../const/cities';

interface IAppState {
  currentCity: ICity;
  sorting: TSortingType;
}

const initialState: IAppState = {
  currentCity: Cities[0],
  sorting: 'Popular',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<ICity>) => {
      state.currentCity = action.payload;
    },
    changeSortingAction: (state, action: PayloadAction<TSortingType>) => {
      state.sorting = action.payload;
    },
  },
});

export const { changeCityAction, changeSortingAction } = appSlice.actions;
export const appReducer = appSlice.reducer;
