import { IFavoritesProps } from '../../types.props';
import FavoritesEmpty from './components/favorites-empty';
import FavoritesList from './components/favorites-list';
import { Helmet } from 'react-helmet-async';

export default function Favorites({ offers }: IFavoritesProps): JSX.Element {
  const isFavoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {isFavoriteOffers && <FavoritesList offers={isFavoriteOffers} />}
            {!isFavoriteOffers && <FavoritesEmpty />}
            {/* {emptyFlag ? <FavoritesList /> : <FavoritesEmpty />} */}
          </section>
        </div>
      </main>
    </>
  );
}
