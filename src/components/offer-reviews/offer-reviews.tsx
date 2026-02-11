import ReviewList from '../review-list/review-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppSelector } from '../../hooks/useStore';
import { IReview } from '../../types/types';
import { AuthorizationStatus } from '../../const/const';

export default function OfferReviews() {
  const reviews = useAppSelector((state) => state.reviews);
  const isAuth = useAppSelector((state) => state.isAuth);
  const isLogged = isAuth === AuthorizationStatus.AUTH;
  const reviewsCount = reviews?.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewList reviews={reviews as IReview[]} />
      {isLogged && (< ReviewsForm />)}
    </section>
  );
}
