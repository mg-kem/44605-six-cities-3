// Подключение компонентов
import Empty from '../empty/empty';

export default function FavoritesEmpty(): JSX.Element {
  return (
    <Empty
      classDiv='favorites__status-wrapper'
      classB='favorites__status'
      classP='favorites__status-description'
      boldContent='Nothing yet saved.'
      paragraph='Save properties to narrow down search or plan your future trips.'
    />
  );
}
