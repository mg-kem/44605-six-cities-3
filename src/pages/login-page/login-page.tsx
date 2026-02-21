// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
// Подключение компонентов
import SignIn from '../../components/sign-in/sign-in';
import CurrentLocationImage from '../../components/current-location-image/current-location-image';


export default function LoginPage(): JSX.Element {

  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <SignIn />
          <CurrentLocationImage />
        </div>

      </main>
    </>
  );
}
