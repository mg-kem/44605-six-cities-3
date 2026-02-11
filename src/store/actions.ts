import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer, IReview, UserData } from '../types/types';
import { TSortingType } from '../types/types';
import { AuthorizationStatus } from '../const/const';

const enum ActionType {
  // Синхронные действия
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  // Асинхронные действия
  LoadingOffers = 'loadingOffers',
  LoadingCurrentOffer = 'loadingCurrentOffer',
  LoadingNearbyOffers = 'loadingNearbyOffers',
  // Загрузить список избранных для пользователя
  // Изменение статуса избранного у offer ?
  LoadingReviews = 'loadingReviews',
  RequireAuthorization = 'requireAuthorization',
  SetUserData = 'setUserData',
  SetIsFetching = 'setIsFetching',
}

/** Изменить город */
export const changeCityAction = createAction(ActionType.ChangeCity, (city: ICity) => ({
  payload: city,
}));

/** Изменить сортировку */
export const changeSortingAction = createAction(ActionType.ChangeSorting, (sorting: TSortingType) => ({
  payload: sorting,
}));

/** Заполнить список предложений */
export const loadingOffersAction = createAction(ActionType.LoadingOffers, (offers: IOffer[]) => ({
  payload: offers,
}));

/** Заполнить информацию о выбранном предложении */
export const loadingCurrentOfferAction = createAction(ActionType.LoadingCurrentOffer, (currentOffer: IOffer) => ({
  payload: currentOffer
}));

/** Заполнить информацию о предложениях поблизости */
export const loadingNearbyOffers = createAction(ActionType.LoadingNearbyOffers, (nearbyOffers: IOffer[]) => ({
  payload: nearbyOffers,
}));

/** Заполнить список отзывов */
export const loadingReviewsAction = createAction(ActionType.LoadingReviews, (reviews: IReview[]) => ({
  payload: reviews,
}));

/** Изменить статус авторизации */
export const requireAuthorizationAction = createAction(ActionType.RequireAuthorization, (status: AuthorizationStatus) => ({
  payload: status,
}));

/** Авторизация пользователя */
export const setUserDataAction = createAction(ActionType.SetUserData, (userData: UserData | null) => ({
  payload: userData,
}));

/** Toggle flag статус загрузки */
export const setIsFetchingAction = createAction(ActionType.SetIsFetching, (isFetching: boolean) => ({
  payload: isFetching,
}));
