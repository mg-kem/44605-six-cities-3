// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';

// Подключение компонентов
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';

// Подключение типизации
import { IFavoritePageProps } from '../../types/types.props';


export default function FavoritesPage({ offers }: IFavoritePageProps): JSX.Element {
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
            {
              isFavoriteOffers
                ? <FavoritesList offers={isFavoriteOffers} />
                : <FavoritesEmpty />
            }
          </section>
        </div>
      </main>
    </>
  );
}
