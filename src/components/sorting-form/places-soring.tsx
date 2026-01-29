// import { FormEvent } from 'react';
import Sorting from '../sorting-option/sorting-option';

export default function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      < Sorting />
    </form >
  );
}
