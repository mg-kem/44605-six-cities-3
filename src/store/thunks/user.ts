import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/const';
import { AxiosInstance } from 'axios';
import { IAuthData, IUserData } from '../../types/types';
import { saveToken, dropToken } from '../../services/token';

export const checkAuthLoginAsyncAction = createAsyncThunk<
  IUserData, void, { extra: AxiosInstance }
>(
  'user/checkAuthLogin',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IUserData>(APIRoute.LOGIN);
    return data;
  });

export const loginAsyncAction = createAsyncThunk<
  IUserData, IAuthData, { extra: AxiosInstance }
>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<IUserData>(APIRoute.LOGIN, { email, password });
    const { token } = data;
    saveToken(token);
    return data;

  });

export const logoutAsyncAction = createAsyncThunk<
  void, void, { extra: AxiosInstance }
>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
    dropToken();
  });
