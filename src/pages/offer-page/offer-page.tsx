// Подключение вспомогательных файлов
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Подключение компонентов
import OfferImages from '../../components/offer-images/offer-images';
import OfferWrapper from '../../components/offer-wrapper/offer-wrapper';
import OfferMap from '../../components/offer-map/offer-map';
import PlaceCard from '../../components/place-card/place-card';
import { IOffer } from '../../types/types';
import { useParams } from 'react-router-dom';
import { fetchNearbyOffersAction, fetchOfferIdAction, fetchReviewsAction } from '../../store/async-actions';
import { useAppSelector } from '../../hooks/useStore';
import { useAppDispatch } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';

export default function OfferPage(): JSX.Element {
  const currentOffer = useAppSelector((state) => state.currentOffer); // Получаю выбранный offer из state
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers); // Получаю список предложений неподалеку из state
  const currentCity = useAppSelector((state) => state.currentCity); // Получаю активный город
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchOfferIdAction({ id }))
      .unwrap()
      .catch(() => navigate(AppRoute.NOT_FOUND)); // Запрашиваю с сервера данные по выбранному предложению
    dispatch(fetchReviewsAction({ id })); // Запрашиваю отзывы по выбранному предложению
    dispatch(fetchNearbyOffersAction({ id })); // Запрашиваю предложения неподалеку от выбранного предложения

  }, [dispatch, navigate, id]);


  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages images={currentOffer?.images || []} />
          <OfferWrapper currentOffer={currentOffer as IOffer} />
          {currentOffer && <OfferMap currentCity={currentCity} currentOffer={currentOffer} nearbyOffers={nearbyOffers} />}
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.slice(0, 3).map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
