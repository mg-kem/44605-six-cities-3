import { Fragment, ReactEventHandler, useState } from 'react';

const rating = [
  { id: 5, title: 'perfect' },
  { id: 4, title: 'good' },
  { id: 3, title: 'no bad' },
  { id: 2, title: 'badly' },
  { id: 1, title: 'terribly' },
];

export default function ReviewsForm(): JSX.Element {
  const [review, setReview] = useState({
    rating: 0,
    review: ''
  });

  type THandleReviewChange = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  const handleReviewChange: THandleReviewChange = (event) => {
    const { name, value } = event.currentTarget;
    setReview({ ...review, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
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
      <textarea onChange={handleReviewChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.</p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.rating === 0 || review.review.length < 50}
        >
          Submit
        </button>
      </div>
    </form >
  );
}
