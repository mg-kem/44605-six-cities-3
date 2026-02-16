import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/const';
import { AxiosInstance } from 'axios';
import { IOffer } from '../../types/types';


interface IToggleFavoriteOfferPayload {
  id: number | undefined;
  isFavorite: number;
}
export const fetchFavoriteOffersAsyncAction = createAsyncThunk<
  IOffer[], void, { extra: AxiosInstance }
>(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(APIRoute.FAVORITES);
    return data;
  });

export const toggleFavoriteOfferAsyncAction = createAsyncThunk<
  void, IToggleFavoriteOfferPayload, { extra: AxiosInstance }
>(
  'favorites/toggleFavoriteOffer',
  async ({ id, isFavorite }, { extra: api }) => {
    await api.post(`${APIRoute.FAVORITES}/${id}/${isFavorite}`);
  });
