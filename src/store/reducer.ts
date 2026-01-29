import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mock/offers';
import { Cities } from '../const/cities';
import { changeCityAction, changeSortingAction, fillingOffersAction } from './action';

// Определение начального состояния приложения
const initialState = {
  city: Cities[0],
  offers: Offers,
  sorting: 'Popular',
};

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCityAction,
        (state, action) => {
          state.city = action.payload;
        })
      .addCase(fillingOffersAction,
        (state, action) => {
          state.offers = action.payload;
        })
      .addCase(changeSortingAction,
        (state, action) => {
          state.sorting = action.payload;
          state.offers = state.offers.sort((a, b) => {
            switch (action.payload) {
              case 'Popular':
                return 0;
              case 'Price: low to high':
                return a.price - b.price;
              case 'Price: high to low':
                return b.price - a.price;
              case 'Top rated first':
                return b.rating - a.rating;
            }
          });
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
