import { userReducer, initialState } from './userSlice';
import { checkAuthLoginAsyncAction, loginAsyncAction, logoutAsyncAction } from '../thunks/user';
import { AuthorizationStatus } from '../../const/const';
import { IUserData } from '../../types/types';

describe('userReducer', () => {
  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = userReducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  describe('checkAuthLogin', () => {


    it('Должен обновить состояние загрузки isLoading', () => {
      const result = userReducer(initialState, checkAuthLoginAsyncAction.pending('', undefined));
      expect(result.isLoading).toBe(true);
    });

    it('Должен обновить состояние авторизации isAuth', () => {
      const mockUserData: IUserData = {
        email: 'test@test.com',
        token: 'test-token',
        name: 'Test User',
        avatarUrl: 'test.jpg',
        isPro: false,
      };
      const result = userReducer(initialState, checkAuthLoginAsyncAction.fulfilled(mockUserData, '', undefined));
      expect(result.isAuth).toBe(AuthorizationStatus.AUTH);
      expect(result.isLoading).toBe(false);
    });

    it('Должен обновить состояние ошибки error', () => {
      const errorMessage = 'Test error message';
      const result = userReducer(initialState, checkAuthLoginAsyncAction.rejected(new Error(errorMessage), '', undefined));
      expect(result.error).toBe(errorMessage);
      expect(result.isAuth).toBe(AuthorizationStatus.NO_AUTH);
      expect(result.isLoading).toBe(false);
    });
  });

  describe('loginUser', () => {

    it('Должен обновить состояние загрузки isLoading', () => {
      const result = userReducer(initialState, loginAsyncAction.pending('', { email: 'test@test.com', password: 'test-password' }));
      expect(result.isLoading).toBe(true);
    });

    it('Должен обновить состояние авторизации isAuth', () => {
      const mockUserData: IUserData = {
        email: 'test@test.com',
        token: 'test-token',
        name: 'Test User',
        avatarUrl: 'test.jpg',
        isPro: false,
      };
      const result = userReducer(initialState, loginAsyncAction.fulfilled(mockUserData, '', { email: 'test@test.com', password: 'test-password' }));
      expect(result.isAuth).toBe(AuthorizationStatus.AUTH);
      expect(result.isLoading).toBe(false);
    });

    it('Должен обновить состояние ошибки error', () => {
      const errorMessage = 'Test error message';
      const result = userReducer(initialState, loginAsyncAction.rejected(new Error(errorMessage), '', { email: 'test@test.com', password: 'test-password' }));
      expect(result.error).toBe(errorMessage);
      expect(result.isLoading).toBe(false);
    });
  });
});
