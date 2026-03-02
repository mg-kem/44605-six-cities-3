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
    const result = offersReducer(initialState, fetchOffersAsyncAction.pending);
    expect(result.isLoading).toBe(true);
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
});
