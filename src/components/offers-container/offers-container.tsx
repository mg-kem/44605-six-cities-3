// Подключение вспомогательных файлов
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useStore';
import { changeSortingAction } from '../../store/action';
// Подключение компонентов
import PlacesFound from '../places-found/places-found';
import CitiesMap from '../cities-map/cities-map';
import PlaceCard from '../place-card/place-card';
import PlacesSorting from '../places-sorting/places-sorting';
// Подключение типизации
import { IOffersContainerProps } from '../../types/types.props';
import { IOffer } from '../../types/types';


export default function OffersContainer({ offers, activeCity }: IOffersContainerProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);
  const dispatch = useAppDispatch();
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.title); //Получаем список предложений по активному городу

  // При наведении на offer обновляется state компонента для выделения маркера на карте
  const handleMouseEnter = (offer: IOffer) => {
    setSelectedOffer(offer);
  };

  // Изменяю значение сортировки в глобальном состоянии
  const handleSorting = (sorting: 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first') => {
    dispatch(changeSortingAction(sorting));
  };


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <PlacesFound filteredOffers={filteredOffers} />
        <PlacesSorting handleSorting={handleSorting} />

        <div className="cities__places-list places__list tabs__content">
          {
            filteredOffers.map((offer) =>
              <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleMouseEnter(offer)} />)
          }
        </div>
      </section>
      <div className="cities__right-section">
        <CitiesMap selectedOffer={selectedOffer} offers={offers} activeCity={activeCity} />
      </div>
    </div>
  );
}
