import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer } from '../types/types';
import { SortingType } from '../types/types';


// Описание действий
/** Действие для изменения города */
export const changeCityAction = createAction('changeCity', (city: ICity) => ({
  payload: city,
}));

/** Действие для заполнения списка предложений */
export const fillingOffersAction = createAction('fillingOffers', (offers: IOffer[]) => ({
  payload: offers,
}));

export const changeSortingAction = createAction('changeSorting', (sorting: SortingType) => ({
  payload: sorting,
}));

// Описание action
// createAction - создает действие
// 'changeCity' - название действия
// (city: ICity) => ({ payload: city }) - функция, которая возвращает действие
