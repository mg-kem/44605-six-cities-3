import ReviewList from '../review-list/review-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppSelector } from '../../hooks/useStore';
import { AuthorizationStatus } from '../../const/const';

export default function OfferReviews() {
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const isLogged = isAuth === AuthorizationStatus.AUTH;
  const reviewsCount = reviews?.length;
  const sortedReviews = [...reviews].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewList reviews={sortedReviews} />
      {isLogged && (< ReviewsForm />)}
    </section>
  );
}
