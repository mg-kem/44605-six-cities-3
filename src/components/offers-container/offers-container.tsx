// Подключение вспомогательных файлов
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { changeSortingAction } from '../../store/actions';
import PlacesFound from '../places-found/places-found';
import CitiesMap from '../cities-map/cities-map';
import PlaceCard from '../place-card/place-card';
import PlacesSorting from '../places-sorting/places-sorting';
import { IOffersContainerProps } from '../../types/types.props';
import { IOffer } from '../../types/types';
import { TSortingType } from '../../types/types';

const getSortedOffers = (offers: IOffer[], currentSorting: TSortingType): IOffer[] => {
  const cases = [...offers];
  cases.sort((a, b) => {
    switch (currentSorting) {
      case 'Popular':
        return 0;
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
    }
  });
  return cases;
};


export default function OffersContainer({ offers, currentCity }: IOffersContainerProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);
  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector((state) => state.sorting);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity.title);
  const sortedOffers = getSortedOffers(filteredOffers, currentSorting);

  const handleMouseEnter = (offer: IOffer) => {
    setSelectedOffer(offer);
  };

  const handleChangeSorting = (sorting: TSortingType) => {
    dispatch(changeSortingAction(sorting));
  };


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <PlacesFound filteredOffers={filteredOffers} />
        <PlacesSorting handleChangeSorting={handleChangeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) =>
            <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleMouseEnter(offer)} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <CitiesMap selectedOffer={selectedOffer} offers={offers} currentActiveCity={currentCity} />
      </div>
    </div>
  );
}
