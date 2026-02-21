import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAsyncAction, fetchOfferByIdAsyncAction, fetchNearbyOffersAsyncAction } from '../thunks/offers';
import { IOffer } from '../../types/types';
import { toggleFavoriteOfferAsyncAction } from '../thunks/favorites';

interface IOfferState {
  offers: IOffer[];
  offerById: IOffer | null;
  nearbyOffers: IOffer[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IOfferState = {
  offers: [],
  offerById: null,
  nearbyOffers: [],
  isLoading: false,
  error: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchOffersAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchOffersAsyncAction.fulfilled, (state, action) => {
          state.offers = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchOffersAsyncAction.rejected, (state, action) => {
          state.error = action.error.message ?? 'Не удалось загрузить предложения';
          state.isLoading = false;
        })
        .addCase(fetchOfferByIdAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchOfferByIdAsyncAction.fulfilled, (state, action) => {
          state.isLoading = false;
          state.offerById = action.payload;
        })
        .addCase(fetchOfferByIdAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Предложение с выбранным идентификатором не существует';
        })
        .addCase(fetchNearbyOffersAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchNearbyOffersAsyncAction.fulfilled, (state, action) => {
          state.isLoading = false;
          state.nearbyOffers = action.payload.slice(0, 3);
        })
        .addCase(fetchNearbyOffersAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Нет данных';
        })
        .addCase(toggleFavoriteOfferAsyncAction.fulfilled, (state, action) => {
          const updatedOffer = action.payload;
          state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);
        });
    }
});

export const offersReducer = offersSlice.reducer;
