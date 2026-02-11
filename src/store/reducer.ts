import { changeCityAction, changeSortingAction, loadingOffersAction, requireAuthorizationAction, loadingReviewsAction, setIsFetchingAction, setUserDataAction, loadingCurrentOfferAction, loadingNearbyOffers } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { IInitialState } from '../types/types';
import { Cities } from '../const/cities';
import { AuthorizationStatus } from '../const/const';

const initialState: IInitialState = {
  currentCity: Cities[0],
  currentOffer: null,
  nearbyOffers: [],
  offers: [],
  isFetching: null,
  sorting: 'Popular',
  isAuth: AuthorizationStatus.UNKNOWN,
  reviews: [],
  errorMessage: null,
  userData: null,
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
      .addCase(loadingOffersAction,
        (state, action) => {
          state.offers = action.payload;
        })
      .addCase(loadingCurrentOfferAction,
        (state, action) => {
          state.currentOffer = action.payload;
        })
      .addCase(loadingNearbyOffers,
        (state, action) => {
          state.nearbyOffers = action.payload;
        })
      .addCase(loadingReviewsAction,
        (state, action) => {
          state.reviews = action.payload;
        })
      .addCase(requireAuthorizationAction,
        (state, action) => {
          state.isAuth = action.payload;
        })
      .addCase(setUserDataAction,
        (state, action) => {
          state.userData = action.payload;
        })
      .addCase(setIsFetchingAction,
        (state, action) => {
          state.isFetching = action.payload;
        });
  }
);

export default reducer;
