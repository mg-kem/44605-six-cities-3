import { Cities } from '../../const/cities';
import { appReducer, changeCityAction, changeSortingAction } from './appSlice';

describe('appReducer', () => {
  const expectedState = {
    currentCity: Cities[0],
    sorting: 'Popular',
  };

  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = appReducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Должен изменить город', () => {
    const newCity = Cities[1];
    const result = appReducer(undefined, changeCityAction(newCity));
    expect(result.currentCity).toEqual(newCity);
  });

  it('Должен изменить сортировку', () => {
    const newSorting = 'Top rated first';
    const result = appReducer(undefined, changeSortingAction(newSorting));
    expect(result.sorting).toEqual(newSorting);
  });
});
