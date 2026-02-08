// Подключение вспомогательных функций
import { Link } from 'react-router-dom';
import { changeCityAction } from '../../store/actions';

// Подключение компонентов
import PlaceCardMini from '../place-card-mini/place-card-mini';

// Подключение типизации
import { IFavoritesListProps } from '../../types/types.props';
import { useAppDispatch } from '../../hooks/useStore';
import { ICity } from '../../types/types';
import { Cities } from '../../const/cities';
import { AppRoute } from '../../const/const';


export default function FavoritesList({ offers }: IFavoritesListProps): JSX.Element {
  const citiesOfFavoritesOffers = new Set(offers.map((offer) => offer.city.name));
  const cities = [...citiesOfFavoritesOffers];

  const dispatch = useAppDispatch();

  const changeActiveCity = (city: ICity) => {
    dispatch(changeCityAction(city));
  };

  const getCity = (currentCity: string): ICity | undefined => Cities.find((city) => city.title === currentCity);

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span role='button' onClick={() => changeActiveCity(getCity(city) as ICity)}>{city}</span>
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
          </li >
        ))
      }
    </ul >
  );
}
