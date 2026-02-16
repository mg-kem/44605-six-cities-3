import { changeCityAction, changeSortingAction, loadingReviewsAction, } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { IInitialState } from '../types/types';
import { Cities } from '../const/cities';


const initialState: IInitialState = {
  currentCity: Cities[0],
  sorting: 'Popular',
  reviews: [],
};

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCityAction,
        (state, action) => {
          state.currentCity = action.payload;
        })
      .addCase(changeSortingAction,
        (state, action) => {
          state.sorting = action.payload;
        })
      .addCase(loadingReviewsAction,
        (state, action) => {
          state.reviews = action.payload;
        });
  }
);

export default reducer;
