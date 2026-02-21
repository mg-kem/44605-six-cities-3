import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { TState, TAppDispatch } from '../store/index';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
// На основании типа TAppDispatch создаем хук useAppDispatch
// useDispatch - это хук, который возвращает функцию dispatch, которая используется для отправки действий в хранилище
// TAppDispatch - это тип, который определяется в store/state.ts

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
// На основании типа TState создаем хук useAppSelector
// useSelector - это хук, который возвращает функцию selector, которая используется для получения состояния из хранилища
// TState - это тип, который определяется в store/state.ts
