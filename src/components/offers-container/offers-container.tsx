// Подключение вспомогательных файлов
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useStore';
import { changeSortingAction } from '../../store/slices/appSlice';
import MemoizedPlacesFound from '../places-found/places-found';
import CitiesMap from '../cities-map/cities-map';
import MemoizedPlaceCard from '../place-card/place-card';
import MemoizedPlacesSorting from '../places-sorting/places-sorting';
import { IOffersContainerProps } from '../../types/types.props';
import { IOffer } from '../../types/types';
import { TSortingType } from '../../types/types';
import { getSortedOffers } from '../../utils/utils';
import { useCallback, useMemo } from 'react';


export default function OffersContainer({ offers, currentCity, currentSorting }: IOffersContainerProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);
  const dispatch = useAppDispatch();
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity.title);
  const sortedOffers = useMemo(() => getSortedOffers(filteredOffers, currentSorting), [filteredOffers, currentSorting]);

  const handleMouseEnter = useCallback((offer: IOffer) => {
    setSelectedOffer(offer);
  }, []);

  const handleChangeSorting = useCallback((sorting: TSortingType) => {
    dispatch(changeSortingAction(sorting));
  }, [dispatch]);


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MemoizedPlacesFound countOffers={filteredOffers.length} cityName={filteredOffers[0]?.city.name} />
        <MemoizedPlacesSorting currentCity={currentCity} currentSorting={currentSorting} handleChangeSorting={handleChangeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) =>
            <MemoizedPlaceCard key={offer.id} offer={offer} onMouseEnter={handleMouseEnter} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <CitiesMap selectedOffer={selectedOffer} offers={offers} currentCity={currentCity} />
      </div>
    </div>
  );
}
