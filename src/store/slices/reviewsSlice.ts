import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsByIdAsyncAction, sendReviewByOfferAsyncAction } from '../thunks/reviews';
import { IReview } from '../../types/types';

interface IReviewsState {
  reviews: IReview[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IReviewsState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchReviewsByIdAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchReviewsByIdAsyncAction.fulfilled, (state, action) => {
          state.isLoading = false;
          state.reviews = action.payload;
        })
        .addCase(fetchReviewsByIdAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Ошибка запроса к серверу';
        })
        .addCase(sendReviewByOfferAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(sendReviewByOfferAsyncAction.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(sendReviewByOfferAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Произошла ошибка отправки, повторите попытку';
        });
    }
});

export const reviewsReducer = reviewsSlice.reducer;
