import { createSlice } from '@reduxjs/toolkit';
import { checkAuthLoginAsyncAction, loginAsyncAction, logoutAsyncAction } from '../thunks/user';
import { IUserData } from '../../types/types';
import { AuthorizationStatus } from '../../const/const';

interface IUserState {
  userData: IUserData | null;
  isAuth: AuthorizationStatus;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  userData: null,
  isAuth: AuthorizationStatus.UNKNOWN,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(checkAuthLoginAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(checkAuthLoginAsyncAction.fulfilled, (state, action) => {
          state.userData = action.payload;
          state.isAuth = AuthorizationStatus.AUTH;
          state.isLoading = false;
        })
        .addCase(checkAuthLoginAsyncAction.rejected, (state, action) => {
          state.error = action.error.message ?? 'Не удалось загрузить данные пользователя';
          state.isAuth = AuthorizationStatus.NO_AUTH;
          state.isLoading = false;
        })
        .addCase(loginAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginAsyncAction.fulfilled, (state, action) => {
          state.userData = action.payload;
          state.isAuth = AuthorizationStatus.AUTH;
          state.isLoading = false;
        })
        .addCase(loginAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Неверный логин или пароль';
        })
        .addCase(logoutAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(logoutAsyncAction.fulfilled, (state) => {
          state.isAuth = AuthorizationStatus.NO_AUTH;
          state.isLoading = false;
          state.userData = null;
        })
        .addCase(logoutAsyncAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Произошла ошибка обращения к серверу. Повторите попытку';
        });
    }
});

export const userReducer = userSlice.reducer;
