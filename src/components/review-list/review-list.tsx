import { IReviewListProps } from '../../types/types.props';
import ReviewItem from '../review-item/review-item';

export default function ReviewList({ reviews }: IReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem review={review} key={review.id} />
      )}
    </ul>
  );
}
