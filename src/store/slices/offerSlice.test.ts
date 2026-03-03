import { offersReducer, initialState } from './offersSlice';
import { fetchOffersAsyncAction } from '../thunks/offers';
import { IOffer } from '../../types/types';

describe('offersReducer', () => {
  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = offersReducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('Должен обновить состояние загрузки isLoading', () => {
    const result = offersReducer(initialState, fetchOffersAsyncAction.pending('', undefined));
    expect(result.isLoading).toBe(true);
    expect(result.offers).toEqual(initialState.offers);
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
    const result = offersReducer(initialState, fetchOffersAsyncAction.fulfilled(mockOffers, '', undefined));
    expect(result.offers).toEqual(mockOffers);
  });

  it('Должен обновить состояние ошибки error', () => {
    const errorMessage = 'Test error message';
    const result = offersReducer(initialState, fetchOffersAsyncAction.rejected(new Error(errorMessage), '', undefined));
    expect(result.error).toBe(errorMessage);
    expect(result.isLoading).toBe(false);
  });
});
