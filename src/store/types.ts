import { store } from './store';

export type State = ReturnType<typeof store.getState>; // Тип для состояния приложения
export type AppDispatch = typeof store.dispatch; // Тип для dispatch
