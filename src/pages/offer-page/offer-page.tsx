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
import { IOffer } from '../../types/types';
import { useParams } from 'react-router-dom';

const getRandomOffers = (placements: IOffer[], count: number): IOffer[] => {
  if (placements.length <= count) {
    return [...placements];
  }

  const selectedIndices = new Set<number>();
  const result: IOffer[] = [];

  while (selectedIndices.size < count) {
    const randomIndex = Math.floor(Math.random() * placements.length);

    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      result.push(placements[randomIndex]);
    }
  }
  return result;
};


export default function OfferPage({ offers, isAuth }: IOfferPageProps): JSX.Element {
  const [activeAdditionalOffer, setActiveAdditionalOffer] = useState<IOffer | null>(null);
  const { id } = useParams();

  const randomOffers = useMemo(() => getRandomOffers(offers, 3), [offers]);
  const currentOffer = offers.find((offer) => String(offer.id) === id);

  const handleChangeAdditionalOffer = (offer: IOffer) => {
    setActiveAdditionalOffer(offer);
  };


  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferImages />

          <OfferWrapper isAuth={isAuth} currentOffer={currentOffer} />

          <OfferMap activeAdditionalOffer={activeAdditionalOffer} />

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  randomOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleChangeAdditionalOffer(offer)} />)
                }
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
