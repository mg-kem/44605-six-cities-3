import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import reducer from './reducer';

export type TState = ReturnType<typeof store.getState>; // Тип для состояния приложения

export type TAppDispatch = typeof store.dispatch; // Тип для dispatch

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
