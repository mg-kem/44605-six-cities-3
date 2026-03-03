import { Cities } from '../../const/cities';
import { appReducer, changeCityAction, changeSortingAction, initialState } from './appSlice';

describe('appReducer', () => {
  it('Должен вернуть начальное состояние', () => {
    const emptyAction = { type: '' };
    const result = appReducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('Должен изменить город', () => {
    const newCity = Cities[1];
    const result = appReducer(initialState, changeCityAction(newCity));
    expect(result.currentCity).toBe(newCity);
    expect(result.sorting).toBe(initialState.sorting);
  });

  it('Должен изменить сортировку', () => {
    const newSorting = 'Top rated first';
    const result = appReducer(undefined, changeSortingAction(newSorting));
    expect(result.sorting).toEqual(newSorting);
  });
});
