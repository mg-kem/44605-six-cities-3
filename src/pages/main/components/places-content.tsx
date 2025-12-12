import SortingForm from './sorting-form';
import Card from '../../../common-components/card/card';
import Map from '../../../common-components/map/map';
import SearchInfo from './search-info';

interface ICardCount {
  count: number;
}

export default function PlacesContent({ count }: ICardCount) {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <SearchInfo />
        <SortingForm />
        <div className="cities__places-list places__list tabs__content">
          {Array.from({ length: count }).map((item) => (
            <Card key={item as number} img='img/apartment-01.jpg' price={100} title='Wood and stone place' />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}
