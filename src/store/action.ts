import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer, IReview } from '../types/types';
import { SortingType } from '../types/types';
import { AuthorizationStatus } from '../const/const';

const enum ActionType {
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadingOffers = 'loadingOffers',
  LoadingReviews = 'loadingReviews',
  RequireAuthorization = 'requireAuthorization',
  SetError = 'setError',
}

// Описание действий
/** Действие для изменения города */
export const changeCityAction = createAction(ActionType.ChangeCity, (city: ICity) => ({
  payload: city,
}));

/** Действие для изменения типа сортировки */
export const changeSortingAction = createAction(ActionType.ChangeSorting, (sorting: SortingType) => ({
  payload: sorting,
}));

/** Действие для изменения статуса авторизации */
export const requireAuthorizationAction = createAction(ActionType.RequireAuthorization, (status: AuthorizationStatus) => ({
  payload: status,
}));

/** Действие для заполнения списка предложений */
export const loadingOffersAction = createAction(ActionType.LoadingOffers, (offers: IOffer[]) => ({
  payload: offers,
}));

export const loadingReviewsAction = createAction(ActionType.LoadingReviews, (reviews: IReview[]) => ({
  payload: reviews,
}));

export const setErrorAction = createAction(ActionType.SetError, (error: string | null) => ({
  payload: error,
}));
