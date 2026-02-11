import { ISortingProps } from '../../types/types.props';
import { TSortingType } from '../../types/types';
import { useAppSelector } from '../../hooks/useStore';

const sortingOptions = [
  { label: 'Popular', value: 'Popular' },
  { label: 'Price: low to high', value: 'Price: low to high' },
  { label: 'Price: high to low', value: 'Price: high to low' },
  { label: 'Top rated first', value: 'Top rated first' },
];

export default function SortingOption({ handleChangeSorting }: ISortingProps): JSX.Element {
  const currentSorting = useAppSelector((state) => state.sorting);
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
