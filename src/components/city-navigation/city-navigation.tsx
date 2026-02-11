// Подключение вспомогательных файлов
import { Link } from 'react-router-dom';
import { Cities } from '../../const/cities';
import { ICityNavigationProps } from '../../types/types.props';


export default function CityNavigation({ currentCity, onChangeCity }: ICityNavigationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <li className="locations__item" key={city.title}>
              <Link to='#' className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}>
                <span onClick={() => onChangeCity(city)}>{city.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
