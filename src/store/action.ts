import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer } from '../types/types';


// Описание действий
/** Действие для изменения города */
export const changeCity = createAction('changeCity', (city: ICity) => ({
  payload: city,
}));

/** Действие для заполнения списка предложений */
export const fillingOffers = createAction('fillingOffers', (offers: IOffer[]) => ({
  payload: offers,
}));

// Описание action
// createAction - создает действие
// 'changeCity' - название действия
// (city: ICity) => ({ payload: city }) - функция, которая возвращает действие
