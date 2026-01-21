// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

// Подключение компонентов
import CityNavigation from '../../components/city-navigation/city-navigation';
import OffersContainer from '../../components/offers-container/offers-container';
import PlacesEmpty from '../../components/places-empty/places-empty';

// Подключение типизации
import { IMainPageProps } from '../../types/types.props';
import { ICity } from '../../types/types';


export default function MainPage({ offers, cities }: IMainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(cities[0]);

  const handleChangeCity = (newCity: ICity) => {
    setActiveCity(newCity);
  };


  return (
    <>
      <Helmet>
        <title> Главная </title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation cities={cities} activeCity={activeCity} onChangeCity={handleChangeCity} />

        <div className="cities">
          {
            offers.length > 0
              ? <OffersContainer offers={offers} activeCity={activeCity} />
              : <PlacesEmpty />
          }
        </div >
      </main>
    </>
  );
}
