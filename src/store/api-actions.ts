import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import { AppDispatch, IOffer, State, AuthData, UserData } from '../types/types';
import { loadingOffersAction, requireAuthorizationAction, setErrorAction, setIsFetchingAction } from './actions';
import { AxiosInstance } from 'axios';
import { saveToken } from '../services/token';
import { store } from './store';

const enum AsyncActionsType {
  FetchOffers = 'fetchOffers',
  CheckAuthLogin = 'checkAuthLogin',
  Login = 'login',
  ClearError = 'clearError',
}

/** Ассинхронное действие для запроса на сервер для получения списка всех предложений */
export const fetchOffersAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    dispatch(loadingOffersAction(data));
    dispatch(setIsFetchingAction(false));
  }
);

/** Ассинхронное действие для проверки статуса авторизации */
export const checkAuthLoginAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.CheckAuthLogin,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(AppRoute.LOGIN);
      dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH));
    }
  }
);

/** Ассинхронное действие для отправки данных авторизации на сервер */
export const loginAction = createAsyncThunk<void, AuthData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.Login,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(AppRoute.LOGIN, { email, password });
    const { token } = data;
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH));
  });

/** Ассинхронное действие для удаления текста об ошибке */
export const clearErrorAction = createAsyncThunk(
  AsyncActionsType.ClearError,
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);
