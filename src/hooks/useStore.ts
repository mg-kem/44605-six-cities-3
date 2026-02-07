import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../types/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
// На основании типа AppDispatch создаем хук useAppDispatch
// useDispatch - это хук, который возвращает функцию dispatch, которая используется для отправки действий в хранилище
// AppDispatch - это тип, который определяется в store/state.ts

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
// На основании типа State создаем хук useAppSelector
// useSelector - это хук, который возвращает функцию selector, которая используется для получения состояния из хранилища
// State - это тип, который определяется в store/state.ts
