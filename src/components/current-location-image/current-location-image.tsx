import { Link } from 'react-router-dom';

export default function CurrentLocationImage(): JSX.Element {
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link to='#' className="locations__item-link" >
          <span>Amsterdam</span>
        </Link>
      </div>
    </section>
  );
}
