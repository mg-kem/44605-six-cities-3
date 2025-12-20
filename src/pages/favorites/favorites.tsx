import Footer from '../../components/footer/footer';
import FavoritesList from './components/favorites-list';

export default function Favorites(): JSX.Element {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
