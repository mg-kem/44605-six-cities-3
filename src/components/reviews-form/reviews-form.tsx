import { Fragment, ReactEventHandler, useState } from 'react';
import { fetchReviewsByIdAsyncAction, sendReviewByOfferAsyncAction } from '../../store/thunks/reviews';
import { useAppSelector } from '../../hooks/useStore';
import { useAppDispatch } from '../../hooks/useStore';
import { toast } from 'react-toastify';

const rating = [
  { id: 5, title: 'perfect' },
  { id: 4, title: 'good' },
  { id: 3, title: 'no bad' },
  { id: 2, title: 'badly' },
  { id: 1, title: 'terribly' },
];

export default function ReviewsForm(): JSX.Element {
  const currentOfferId = useAppSelector((state) => state.offers.offerById)?.id ?? '';
  const isSending = useAppSelector((state) => state.reviews.isSending);
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({
    rating: 0,
    review: ''
  });

  const handleReviewChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.currentTarget;
    setReview({ ...review, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit: ReactEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(sendReviewByOfferAsyncAction({ id: currentOfferId.toString(), review }))
      .unwrap()
      .then(() => {
        setReview({
          rating: 0,
          review: ''
        });
        dispatch(fetchReviewsByIdAsyncAction({ id: currentOfferId.toString() }));
      })
      .catch(() => toast.error('Ошибка отправки комментария'));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ id, title }) => (
          <Fragment key={id}>
            <input
              onChange={handleReviewChange}
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${id}-stars`}
              type="radio"
              value={`${id}`}
              checked={review.rating === id}
              disabled={isSending}
            />
            <label
              htmlFor={`${id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={`${title}`}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={handleReviewChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review.review} disabled={isSending}>
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.</p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.rating === 0 || review.review.length < 50 || review.review.length > 300 || isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form >
  );
}
