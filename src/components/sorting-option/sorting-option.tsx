import { ISortingOptionsProps } from '../../types/types.props';
import { TSortingType } from '../../types/types';

const sortingOptions = [
  { label: 'Popular', value: 'Popular' },
  { label: 'Price: low to high', value: 'Price: low to high' },
  { label: 'Price: high to low', value: 'Price: high to low' },
  { label: 'Top rated first', value: 'Top rated first' },
];

export default function SortingOption({ currentSorting, handleChangeSorting }: ISortingOptionsProps): JSX.Element {
  return (
    <ul className='places__options places__options--custom places__options--opened'>
      {sortingOptions.map((option) => (
        <li className={`places__option ${currentSorting === option.value ? 'places__option--active' : ''}`} key={option.value} tabIndex={0} onClick={() => handleChangeSorting(option.value as TSortingType)}>
          {option.label}
        </li>
      ))}
    </ul>
  );
}
