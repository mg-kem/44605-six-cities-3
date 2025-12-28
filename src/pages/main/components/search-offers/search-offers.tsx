import CitiesNavigation from '../../../../components/cities-navigation/cities-navigation';
import OffersContent from '../offers-content/offers-content';
import PlacesEmpty from '../places-empty/places-empty';
import { ISearchOffersProps } from '../../../../types.props';


export default function SearchOffers({ offers }: ISearchOffersProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      < CitiesNavigation />
      <div className="cities">
        {offers.length > 0 ? <OffersContent offers={offers} /> : <PlacesEmpty />}
      </div >
    </main >
  );
}
