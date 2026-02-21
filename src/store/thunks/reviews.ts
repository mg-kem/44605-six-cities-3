import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOfferId, IReview } from '../../types/types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const/const';


interface IReviewPayload {
  id: string;
  review: {
    rating: number;
    review: string;
  };
}

export const fetchReviewsByIdAsyncAction = createAsyncThunk<
  IReview[], IOfferId, { extra: AxiosInstance }
>(
  'reviews/fetchReviews',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<IReview[]>(`${APIRoute.COMMENTS}/${id}`);
    return data;
  }
);

export const sendReviewByOfferAsyncAction = createAsyncThunk<
  void, IReviewPayload, { extra: AxiosInstance }
>(
  'reviews/sendReviews',
  async ({ id, review }, { extra: api }) => {
    const body = { rating: review.rating, comment: review.review };
    await api.post(`${APIRoute.COMMENTS}/${id}`, body);

  }
);
