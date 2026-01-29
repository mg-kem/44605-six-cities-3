// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { changeCityAction } from '../../store/action';

// Подключение компонентов
import CityNavigation from '../../components/city-navigation/city-navigation';
import OffersContainer from '../../components/offers-container/offers-container';
import PlacesEmpty from '../../components/places-empty/places-empty';

// Подключение типизации
import { ICity } from '../../types/types';


export default function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city); // Получаем активный город из состояния
  const offers = useAppSelector((state) => state.offers); // Получаем список офферов из состояния

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
        <CityNavigation activeCity={activeCity} onChangeCity={handleChangeCity} />
        <div className="cities">
          {offers.length > 0
            ? <OffersContainer offers={offers} activeCity={activeCity} />
            : <PlacesEmpty />}
        </div >
      </main>
    </>
  );
}
