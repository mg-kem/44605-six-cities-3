import PlaceCardMini from './place-card-mini';
import { Link } from 'react-router-dom';
import { IFavoritesListProps } from '../../../types.props';
import { Fragment } from 'react';

export default function FavoritesList({ offers }: IFavoritesListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {offers.map((offer) => (
        <Fragment key={offer.id}>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              <PlaceCardMini offer={offer} />
            </div>
          </li>
        </Fragment>

      ))}

      {/* <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCardMini />
          <PlaceCardMini />
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Cologne</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCardMini />
        </div>
      </li> */}
    </ul>
  );
}
