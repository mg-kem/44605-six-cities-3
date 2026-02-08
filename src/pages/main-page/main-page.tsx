// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { changeCityAction } from '../../store/actions';

// Подключение компонентов
import CityNavigation from '../../components/city-navigation/city-navigation';
import OffersContainer from '../../components/offers-container/offers-container';
import PlacesEmpty from '../../components/places-empty/places-empty';
import Spinner from '../../components/spinner/spinner';

// Подключение типизации
import { ICity } from '../../types/types';

export default function MainPage(): JSX.Element {
  const currentActiveCity = useAppSelector((state) => state.currentCity); // Получаем активный город из состояния
  const offers = useAppSelector((state) => state.offers); // Получаем список офферов из состояния
  const isFetching = useAppSelector((state) => state.isFetching);
  const dispatch = useAppDispatch(); // Получаем функцию dispatch для отправки действий в хранилище

  const handleChangeCity = (newCity: ICity) => {
    dispatch(changeCityAction(newCity));
  };

  return (
    <>
      <Helmet>
        <title> Главная </title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation currentActiveCity={currentActiveCity} onChangeCity={handleChangeCity} />
        <div className="cities">
          {isFetching && <Spinner />}
          {!isFetching && offers.length > 0 && (
            <OffersContainer offers={offers} currentActiveCity={currentActiveCity} />
          )}
          {!isFetching && offers.length === 0 && <PlacesEmpty />}
        </div>
      </main>
    </>
  );
}
