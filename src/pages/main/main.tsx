import Header from '../../common-components/header/header';
import CityNavigation from '../../common-components/city-navigation/city-navigation';
import PlacesContent from './components/places-content';
import NoPlaces from './components/no-places';

interface ICardCount {
  count?: number;
}

export default function Main({ count }: ICardCount) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        < CityNavigation />
        <div className="cities">
          {count && count > 0 ? <PlacesContent count={count} /> : <NoPlaces />}
        </div >
      </main >
    </div >
  );
}
