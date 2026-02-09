import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { AppDispatch, IOffer, State, AuthData, UserData, OfferID, IReview } from '../types/types';
import { loadingOffersAction, requireAuthorizationAction, setIsFetchingAction, setUserDataAction, loadingCurrentOfferAction, loadingReviewsAction, loadingNearbyOffers } from './actions';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../services/token';
import { toast } from 'react-toastify';

const enum AsyncActionsType {
  FetchOffers = 'fetchOffers',
  FetchOfferId = 'fetchOfferId',
  FetchNearbyOffers = 'fetchNearbyOffers',
  // Получить список избранных
  // Изменить статус избранного
  FetchReviewsByOffer = 'fetchReviewByOffer',
  // Добавить новый комментарий
  CheckAuthLogin = 'checkAuthLogin',
  Login = 'login',
  Logout = 'logout',
}

/** Получить список предложений */
export const fetchOffersAction = createAsyncThunk<void, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    dispatch(loadingOffersAction(data));
    dispatch(setIsFetchingAction(false));
  }
);

/** Получить предложение */
export const fetchOfferIdAction = createAsyncThunk<void, OfferID, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
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

/** Получить список предложений неподалёку  */
export const fetchNearbyOffersAction = createAsyncThunk<void, OfferID, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchNearbyOffers,
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IOffer[]>(`${APIRoute.OFFERS}/${id}/nearby`);
      dispatch(loadingNearbyOffers(data));
    } catch (error) {
      toast.error(error as string);
    }
  }
);

/** Получить список комментариев */
export const fetchReviewsAction = createAsyncThunk<void, OfferID, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  AsyncActionsType.FetchReviewsByOffer,
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IReview[]>(`${APIRoute.COMMENTS}/${id}`);
      dispatch(loadingReviewsAction(data));
    } catch (error) {
      toast.error(error as string);
    }
  }
);

/** Проверить статус авторизации пользователя */
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

/** Авторизоваться на сервере */
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

/** Завершить сеанс пользователя */
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
