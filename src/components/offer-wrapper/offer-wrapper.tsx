// Подключаем компоненты
import OfferReviews from '../offer-reviews/offer-reviews';
import OwnerDescription from '../owner-description/owner-description';
import { IOfferWrapperProps } from '../../types/types.props';

export default function OfferWrapper({ currentOffer }: IOfferWrapperProps): JSX.Element {
  const goods = currentOffer?.goods || [];
  const ratingWidth = (100 / 5) * (currentOffer?.rating || 0);
  const hostData = currentOffer?.host || null;

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {currentOffer?.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}

        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {currentOffer?.title}
          </h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{currentOffer?.rating}</span>
        </div>

        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {currentOffer?.type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {currentOffer?.bedrooms} Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {currentOffer?.maxAdults} adults
          </li>
        </ul>

        <div className="offer__price">
          <b className="offer__price-value">&euro;{currentOffer?.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>

        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {
              goods.map((option) => (
                <li className="offer__inside-item" key={option}>
                  {option}
                </li>
              ))
            }
          </ul>
        </div>

        <OwnerDescription hostData={hostData} />

        <OfferReviews />

      </div>
    </div >
  );
}
