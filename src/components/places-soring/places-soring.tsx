// import { FormEvent } from 'react';
import { useState } from 'react';
import SortingOption from '../sorting-option/sorting-option';

export default function PlacesSorting(): JSX.Element {
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const handleSorting = () => {
    setShowSortingOptions(!showSortingOptions);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        role='button'
        onClick={handleSorting}
        className="places__sorting-type"
        tabIndex={0}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        showSortingOptions && (
          <SortingOption />
        )
      }
    </form >
  );
}
