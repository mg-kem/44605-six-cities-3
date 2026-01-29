// Подключение вспомогательных функций
import { Link } from 'react-router-dom';

// Подключение компонентов
import PlaceCardMini from '../place-card-mini/place-card-mini';

// Подключение типизации
import { IFavoritesListProps } from '../../types/types.props';


export default function FavoritesList({ offers }: IFavoritesListProps): JSX.Element {
  const citiesOfFavoritesOffers = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {
        citiesOfFavoritesOffers.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {
                offers.filter((offer) => offer.city.name === city).map((offer) => (
                  <PlaceCardMini key={offer.id} offer={offer} />
                ))
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
}
