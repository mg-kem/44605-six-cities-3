import { Helmet } from 'react-helmet-async';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { useEffect } from 'react';
import { fetchFavoriteOffersAsyncAction } from '../../store/thunks/favorites';


export default function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector((state) => state.favoriteOffers.favoritesOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAsyncAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoritesOffers && (<FavoritesList offers={favoritesOffers} />)}
            {!favoritesOffers && (<FavoritesEmpty />)}
          </section>
        </div>
      </main>
    </>
  );
}
