// import { FormEvent } from 'react';
import { useState } from 'react';
import SortingOption from '../sorting-option/sorting-option';
import { useEffect } from 'react';
import { ISortingProps } from '../../types/types.props';

export default function PlacesSorting({ currentCity, currentSorting, handleChangeSorting }: ISortingProps): JSX.Element {
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const handleShowSorting = () => {
    setShowSortingOptions(!showSortingOptions);
  };

  useEffect(() => {
    setShowSortingOptions(false);
  }, [currentCity, currentSorting]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        role='button'
        onClick={handleShowSorting}
        className="places__sorting-type"
        tabIndex={0}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showSortingOptions && (<SortingOption currentSorting={currentSorting} handleChangeSorting={handleChangeSorting} />)}
    </form >
  );
}
