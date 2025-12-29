import Map from '../map/map';
import PlaceCard from '../../../../components/place-card/place-card';
import SearchInfo from '../search-info/search-info';
import SortingForm from '../sorting-form/sorting-form';
import { IOffersContentProps } from '../../../../types.props';
import { useState } from 'react';


export default function OffersContent({ offers }: IOffersContentProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  void activeOffer; // Временная мера, чтобы не ругался Eslint.

  const handleMouseEnter = (id: number) => {
    setActiveOffer(id);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <SearchInfo />
        <SortingForm />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleMouseEnter(offer.id)} />)}
        </div>
      </section>
      <div className="cities__right-section">
        < Map />
      </div>
    </div>
  );
}
