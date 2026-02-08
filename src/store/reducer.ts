import { createReducer } from '@reduxjs/toolkit';
// import { Offers } from '../mock/offers';
import { Cities } from '../const/cities';
import { changeCityAction, changeSortingAction, loadingOffersAction, requireAuthorizationAction, loadingReviewsAction, setErrorAction, setIsFetchingAction } from './actions';
import { AuthorizationStatus } from '../const/const';
import { IOffer } from '../types/types';
import { ICity, SortingType, IReview } from '../types/types';


type InitialState = {
  currentCity: ICity;
  offers: IOffer[];
  isFetching: boolean;
  sorting: SortingType;
  isAuth: AuthorizationStatus;
  reviews: IReview[];
  errorMessage: string | null;
}

const initialState: InitialState = {
  currentCity: Cities[0],
  offers: [],
  isFetching: true,
  sorting: 'Popular',
  isAuth: AuthorizationStatus.UNKNOWN,
  reviews: [],
  errorMessage: null,
};

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCityAction,
        (state, action) => {
          state.currentCity = action.payload;
        })
      .addCase(changeSortingAction,
        (state, action) => {
          state.sorting = action.payload;
        })
      .addCase(requireAuthorizationAction,
        (state, action) => {
          state.isAuth = action.payload;
        }
      )
      .addCase(loadingOffersAction,
        (state, action) => {
          state.offers = action.payload;
        })
      .addCase(loadingReviewsAction,
        (state, action) => {
          state.reviews = action.payload;
        }
      )
      .addCase(setErrorAction,
        (state, action) => {
          state.errorMessage = action.payload;
        }
      )
      .addCase(setIsFetchingAction,
        (state, action) => {
          state.isFetching = action.payload;
        }
      );
  }
);

export default reducer;

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

