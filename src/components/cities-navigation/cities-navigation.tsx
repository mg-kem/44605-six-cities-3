import { Link } from 'react-router-dom';
import { ICitiesNavigationProps } from '../../types.props';

export default function CitiesNavigation({ cities }: ICitiesNavigationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li className="locations__item" key={city.title}>
                <Link to='#' className={`locations__item-link tabs__item ${city.checked ? 'tabs__item--active' : ''}`}>
                  <span>{city.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
