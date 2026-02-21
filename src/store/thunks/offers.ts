import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/const';
import { IOffer, IOfferId } from '../../types/types';
import { AxiosInstance } from 'axios';

export const fetchOffersAsyncAction = createAsyncThunk<
  IOffer[], void, { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    return data;
  }
);

export const fetchOfferByIdAsyncAction = createAsyncThunk<
  IOffer, IOfferId, { extra: AxiosInstance }
>(
  'offers/fetchOfferById',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<IOffer>(`${APIRoute.OFFERS}/${id}`);
    return data;
  }
);

export const fetchNearbyOffersAsyncAction = createAsyncThunk<
  IOffer[], IOfferId, { extra: AxiosInstance }
>(
  'offers/fetchNearbyOffers',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(`${APIRoute.OFFERS}/${id}/nearby`);
    return data;
  }
);

// В дженерике
// первый тип - это тип возвращаемого значения,
// второй тип - это тип аргумента,
// третий тип - это тип дополнительных параметров.
