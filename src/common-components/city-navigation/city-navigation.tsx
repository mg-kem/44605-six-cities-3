import { NameOfCities } from '../../const/const';

export default function CityNavigation() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            NameOfCities.map((city: string) => (
              <li className="locations__item" key={city}>
                {/* Нужно продумать атрибут checked для выбранного города*/}
                <a className="locations__item-link tabs__item" href="#">
                  <span>{city}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
