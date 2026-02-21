// Подключение вспомогательных файлов
import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import OfferImages from '../../components/offer-images/offer-images';
import OfferWrapper from '../../components/offer-wrapper/offer-wrapper';
import OfferMap from '../../components/offer-map/offer-map';
import PlaceCard from '../../components/place-card/place-card';
import { IOffer } from '../../types/types';
import { useParams } from 'react-router-dom';
import { fetchOfferByIdAsyncAction, fetchNearbyOffersAsyncAction } from '../../store/thunks/offers';
import { fetchReviewsByIdAsyncAction } from '../../store/thunks/reviews';
import { useAppSelector } from '../../hooks/useStore';
import { useAppDispatch } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import Spinner from '../../components/spinner/spinner';

export default function OfferPage(): JSX.Element {
  const currentCity = useAppSelector((state) => state.appReducer.currentCity);
  const currentOffer = useAppSelector((state) => state.offers.offerById);
  const nearbyOffers = useAppSelector((state) => state.offers.nearbyOffers);
  const isLoading = useAppSelector((state) => state.offers.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentOfferImages = useMemo(() => currentOffer?.images ?? [], [currentOffer]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchOfferByIdAsyncAction({ id }))
      .unwrap()
      .then(() => {
        dispatch(fetchReviewsByIdAsyncAction({ id }));
        dispatch(fetchNearbyOffersAsyncAction({ id }));
      })
      .catch(() => navigate(AppRoute.NOT_FOUND));
  }, [dispatch, navigate, id]);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages images={currentOfferImages} />
          <OfferWrapper currentOffer={currentOffer as IOffer} />
          {currentOffer && <OfferMap currentCity={currentCity} currentOffer={currentOffer} nearbyOffers={nearbyOffers} />}
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
