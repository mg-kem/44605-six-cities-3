import { favoriteOffersReducer, initialState } from './favoritesSlices';
import { fetchFavoriteOffersAsyncAction } from '../thunks/favorites';
import { IOffer } from '../../types/types';

describe('favoriteOffersReducer', () => {
  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = favoriteOffersReducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('Должен обновить состояние загрузки isLoading', () => {
    const result = favoriteOffersReducer(initialState, fetchFavoriteOffersAsyncAction.pending('', undefined));
    expect(result.isLoading).toBe(true);
    expect(result.favoritesOffers).toEqual(initialState.favoritesOffers);
  });

  it('Должен обновить список предложений offers', () => {
    const mockOffers: IOffer[] = [{
      id: 1,
      title: 'Test offer',
      type: 'type',
      price: 100,
      city: { name: 'Test city', location: { latitude: 0, longitude: 0, zoom: 0 } },
      location: { latitude: 0, longitude: 0, zoom: 0 },
      isFavorite: false,
      isPremium: false,
      rating: 0, previewImage: 'test.jpg',
    }];
    const result = favoriteOffersReducer(initialState, fetchFavoriteOffersAsyncAction.fulfilled(mockOffers, '', undefined));
    expect(result.favoritesOffers).toEqual(mockOffers);
  });

  it('Должен обновить состояние ошибки error', () => {
    const errorMessage = 'Test error message';
    const result = favoriteOffersReducer(initialState, fetchFavoriteOffersAsyncAction.rejected(new Error(errorMessage), '', undefined));
    expect(result.error).toBe(errorMessage);
    expect(result.isLoading).toBe(false);
  });
});
