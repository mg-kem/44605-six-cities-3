import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mock/offers';
import { Cities } from '../const/cities';
import { changeCity, fillingOffers } from './action';

// Определение начального состояния приложения
const initialState = {
  city: Cities[0].title,
  offers: Offers,
};

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCity,
        (state, action) => {
          state.city = action.payload.title;
        })
      .addCase(fillingOffers,
        (state, action) => {
          state.offers = action.payload;
        });
  }
);

// Описание редюсера
// CreateReducer - создает редюсер
// builder - builder - это объект, который позволяет добавлять новые случаи в редюсер
// addCase - добавляет новый случай в редюсер
// state - состояние
// action - действие
// return state - возвращает новое состояние
// return state.city = action.payload.title; - изменяет состояние на новое
// return state.offers = action.payload; - изменяет состояние на новое
// return state; - возвращает новое состояние
// За счет того, что redux toolkit использует immer, мы можем изменять состояние напрямую, без необходимости возвращать новое состояние

export default reducer;
