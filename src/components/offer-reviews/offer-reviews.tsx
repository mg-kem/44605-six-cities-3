import ReviewList from '../review-list/review-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppSelector } from '../../hooks/useStore';

export default function OfferReviews() {
  const reviews = useAppSelector((state) => state.reviews);
  const isAuth = useAppSelector((state) => state.isAuth);
  const reviewsCount = reviews.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewList reviews={reviews} />
      {isAuth && (< ReviewsForm />)}
    </section>
  );
}
