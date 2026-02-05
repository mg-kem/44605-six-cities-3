// import { FormEvent } from 'react';
import { useState } from 'react';
import SortingOption from '../sorting-option/sorting-option';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useStore';
import { ISortingProps } from '../../types/types.props';

export default function PlacesSorting({ handleChangeSorting }: ISortingProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.currentCity);
  const sortingValue = useAppSelector((state) => state.sorting);
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const handleShowSorting = () => {
    setShowSortingOptions(!showSortingOptions);
  };

  useEffect(() => {
    setShowSortingOptions(false);
  }, [activeCity, sortingValue]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        role='button'
        onClick={handleShowSorting}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortingValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showSortingOptions && (<SortingOption handleChangeSorting={handleChangeSorting} />)}
    </form >
  );
}
