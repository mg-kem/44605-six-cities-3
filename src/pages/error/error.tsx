import { Link } from 'react-router-dom';
import Empty from '../../components/empty/empty';
import './error.css';

export default function Error() {
  return (
    <>
      <Empty
        classDiv='error404__status-wrapper'
        boldContent='Ошибка 404'
        paragraph='Страницы не существует'
      />
      <div className='error__link-to-main'>
        <Link to='/'>На главную</Link>
      </div>
    </>
  );
}
