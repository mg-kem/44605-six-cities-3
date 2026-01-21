// Подключение вспомогательных файлов
import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// Подключение компонентов
import OfferImages from '../../components/offer-images/offer-images';
import OfferWrapper from '../../components/offer-wrapper/offer-wrapper';
import OfferMap from '../../components/offer-map/offer-map';
import PlaceCard from '../../components/place-card/place-card';

// Подключение типизации
import { IOfferPageProps } from '../../types/types.props';
import { ICity, IOffer } from '../../types/types';
import { useParams } from 'react-router-dom';


const getRandomOffers = (placements: IOffer[], count: number, city: ICity): IOffer[] => {
  if (placements.length <= count) {
    return [...placements];
  }
  const filteredOffers = placements.filter((offer) => offer.city.name === city.title);
  const selectedIndices = new Set<number>();
  const result: IOffer[] = [];

  while (selectedIndices.size < count) {
    const randomIndex = Math.floor(Math.random() * filteredOffers.length);
    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      result.push(filteredOffers[randomIndex]);
    }
  }
  return result;
};


const getCityById = (offers: IOffer[], cities: ICity[], id: string) => {
  const offerById = offers.find((offer) => String(offer.id) === id);
  const cityName = offerById?.city.name;
  const cityById = cities.find((city) => city.title === cityName);
  return [cityById, offerById];
};


export default function OfferPage({ offers, cities, isAuth }: IOfferPageProps): JSX.Element {
  const { id } = useParams();
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);

  const [presentedCity, currentOffer] = getCityById(offers, cities, id as string);

  const randomOffers = useMemo(() => getRandomOffers(offers, 3, presentedCity as ICity), [offers, presentedCity]);

  const handleSelectOffer = (offer: IOffer) => {
    setSelectedOffer(offer);
  };


  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferImages />

          <OfferWrapper isAuth={isAuth} currentOffer={currentOffer as IOffer} />

          <OfferMap selectedOffer={selectedOffer} randomOffers={randomOffers} presentedCity={presentedCity as ICity} />

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  randomOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleSelectOffer(offer)} />)
                }
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
