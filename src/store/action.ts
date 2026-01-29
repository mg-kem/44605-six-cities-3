import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer } from '../types/types';

/** Действие для изменения города */
export const changeCity = createAction('changeCity', (city: ICity) => ({
  payload: city,
}));

/** Действие для заполнения списка предложений */
export const fillingOffers = createAction('fillingOffers', (offers: IOffer[]) => ({
  payload: offers,
}));
