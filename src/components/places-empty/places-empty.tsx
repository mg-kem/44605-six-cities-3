// Подключение компонентов
import Empty from '../empty/empty';

export default function PlacesEmpty(): JSX.Element {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">

        <Empty
          classDiv='cities__status-wrapper tabs__content'
          classB='cities__status'
          classP='cities__status-description'
          boldContent='No places to stay available'
          paragraph='We could not find any property available at the moment in Dusseldorf'
        />

      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
