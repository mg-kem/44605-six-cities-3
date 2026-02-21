import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffersAsyncAction, toggleFavoriteOfferAsyncAction } from '../thunks/favorites';
import { IOffer } from '../../types/types';

interface IFavoriteOffersState {
  favoritesOffers: IOffer[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IFavoriteOffersState = {
  favoritesOffers: [],
  isLoading: false,
  error: null
};

const favoriteOffersSlice = createSlice({
  name: 'favoriteOffers',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchFavoriteOffersAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchFavoriteOffersAsyncAction.fulfilled, (state, action) => {
          state.isLoading = false;
          state.favoritesOffers = action.payload;
        })
        .addCase(fetchFavoriteOffersAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Произошла ошибка';
        })
        .addCase(toggleFavoriteOfferAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(toggleFavoriteOfferAsyncAction.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(toggleFavoriteOfferAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Произошел сбой обращения к серверу';
        });
    }
});

export const favoriteOffersReducer = favoriteOffersSlice.reducer;
