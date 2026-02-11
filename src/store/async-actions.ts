import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { IOffer, TAuthData, UserData, OfferID, IReview } from '../types/types';
import { TAppDispatch, TState } from '../store/store';
import { loadingOffersAction, requireAuthorizationAction, setIsFetchingAction, setUserDataAction, loadingCurrentOfferAction, loadingReviewsAction, loadingNearbyOffers } from './actions';
import { AxiosInstance, isAxiosError } from 'axios';
import { saveToken, dropToken } from '../services/token';
import { toast } from 'react-toastify';

const enum AsyncActionsType {
  FetchOffers = 'fetchOffers',
  FetchOfferId = 'fetchOfferId',
  FetchNearbyOffers = 'fetchNearbyOffers',
  // Получить список избранных
  // Изменить статус избранного
  FetchReviewsByOffer = 'fetchReviewByOffer',
  SendReviewByOffer = 'sendReviewByOffer', // Добавить новый комментарий
  CheckAuthLogin = 'checkAuthLogin',
  Login = 'login',
  Logout = 'logout',
}

/** Получить список предложений */
export const fetchOffersAction = createAsyncThunk<void, void, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
  AsyncActionsType.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    dispatch(loadingOffersAction(data));
    dispatch(setIsFetchingAction(false));
  }
);

/** Получить предложение */
export const fetchOfferIdAction = createAsyncThunk<void, OfferID, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
  AsyncActionsType.FetchOfferId,
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IOffer>(`${APIRoute.OFFERS}/${id}`);
      dispatch(loadingCurrentOfferAction(data));
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
      } else {
        toast.error('Произошла ошибка');
      }
      throw error; // Чтобы промис был в статусе rejected
    }
  }
);

/** Получить список предложений неподалёку  */
export const fetchNearbyOffersAction = createAsyncThunk<void, OfferID, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
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
export const fetchReviewsAction = createAsyncThunk<void, OfferID, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
  AsyncActionsType.FetchReviewsByOffer,
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IReview[]>(`${APIRoute.COMMENTS}/${id}`);
      dispatch(loadingReviewsAction(data));
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  }
);

/** Отправить комментарий */
export const sendReviewByOfferAction = createAsyncThunk<void, { id: string; review: { rating: number; review: string } }, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
  AsyncActionsType.SendReviewByOffer,
  async ({ id, review }, { dispatch, extra: api }) => {
    try {
      const body = { rating: review.rating, comment: review.review };
      await api.post(`${APIRoute.COMMENTS}/${id}`, body);
      dispatch(fetchReviewsAction({ id }));
    } catch (error) {
      toast.error(error as string);
      throw error;
    }
  }
);

/** Проверить статус авторизации пользователя */
export const checkAuthLoginAction = createAsyncThunk<void, void, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
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
export const loginAction = createAsyncThunk<void, TAuthData, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
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

      toast.error('Неверный логин или пароль');

    }
  }
);

/** Завершить сеанс пользователя */
export const logoutAction = createAsyncThunk<void, void, { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }>(
  AsyncActionsType.Logout,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFetchingAction(true));
    try {
      await api.delete(APIRoute.LOGOUT);
      dropToken();
      dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH));
      dispatch(setUserDataAction(null));
      dispatch(setIsFetchingAction(false));
    } catch {
      dispatch(setIsFetchingAction(false));
      toast.error('Произошла ошибка');
    }
  }
);
