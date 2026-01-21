// Подключение вспомогательных файлов
import { Link } from 'react-router-dom';
import './error-page.css';

// Подключение компонентов
import Empty from '../../components/empty/empty';


export default function ErrorPage() {
  return (
    <div className='error-page'>

      <Empty
        classDiv='error404__status-wrapper'
        boldContent='Ошибка 404'
        paragraph='Страницы не существует'
      />

      <div className='error__link-to-main'>
        <Link to='/'>На главную</Link>
      </div>

    </div>
  );
}
