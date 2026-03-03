import { reviewsReducer, initialState } from './reviewsSlice';
import { fetchReviewsByIdAsyncAction } from '../thunks/reviews';
import { IReview } from '../../types/types';

describe('reviewsReducer', () => {
  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = reviewsReducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('Должен обновить состояние загрузки isLoading', () => {
    const result = reviewsReducer(initialState, fetchReviewsByIdAsyncAction.pending('', { id: 'offer-1' }));
    expect(result.isLoading).toBe(true);
  });

  it('Должен обновить список отзывов reviews', () => {
    const mockReviews: IReview[] = [{
      id: 1,
      rating: 5,
      date: '2026-03-03',
      comment: 'Test comment',
      user: {
        isPro:
          false,
        name: 'Test user',
        avatarUrl: 'test.jpg'
      },
    }];
    const result = reviewsReducer(initialState, fetchReviewsByIdAsyncAction.fulfilled(mockReviews, '', { id: 'offer-1' }));
    expect(result.reviews).toEqual(mockReviews);
    expect(result.isLoading).toBe(false);
  });

  it('Должен обновить состояние ошибки error', () => {
    const errorMessage = 'Test error message';
    const result = reviewsReducer(initialState, fetchReviewsByIdAsyncAction.rejected(new Error(errorMessage), '', { id: 'offer-1' }));
    expect(result.error).toBe(errorMessage);
  });
});
