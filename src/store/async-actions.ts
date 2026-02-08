import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { AppDispatch, IOffer, State, AuthData, UserData, OfferID } from '../types/types';
import { loadingOffersAction, requireAuthorizationAction, setIsFetchingAction, setUserDataAction, loadingCurrentOfferAction } from './actions';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../services/token';
import { toast } from 'react-toastify';

const enum AsyncActionsType {
  FetchOffers = 'fetchOffers',
  FetchOfferId = 'fetchOfferId',
  CheckAuthLogin = 'checkAuthLogin',
  Login = 'login',
  Logout = 'logout',
  ClearError = 'clearError',
}

/** Ассинхронное действие для запроса на сервер для получения списка всех предложений */
export const fetchOffersAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    dispatch(loadingOffersAction(data));
    dispatch(setIsFetchingAction(false));
  }
);

export const fetchOfferIdActions = createAsyncThunk<void, OfferID, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchOfferId,
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IOffer>(`${APIRoute.OFFERS}/${id}`);
      dispatch(loadingCurrentOfferAction(data));
    } catch (error) {
      toast.error(error as string);
    }
  }
);

/** Ассинхронное действие для проверки статуса авторизации */
export const checkAuthLoginAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.CheckAuthLogin,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.LOGIN);
      dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH));
      dispatch(setUserDataAction(data));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH));
    }
  }
);

/** Ассинхронное действие для отправки данных авторизации на сервер */
export const loginAction = createAsyncThunk<void, AuthData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.Login,
  async ({ email, password }, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    try {
      const { data } = await api.post<UserData>(APIRoute.LOGIN, { email, password });
      const { token } = data;
      saveToken(token);
      dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH));
      dispatch(setUserDataAction(data));
      dispatch(setIsFetchingAction(false));
    } catch (error) {
      dispatch(setIsFetchingAction(false));
      dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH));
      toast.error('Что-то пошло не так');
    }
  }
);

export const logoutAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.Logout,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    await api.delete(APIRoute.LOGOUT);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH));
    dispatch(setUserDataAction(null));
    dispatch(setIsFetchingAction(false));
  }
);
