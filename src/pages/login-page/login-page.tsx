
// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/useStore';
// Подключение компонентов
import SignIn from '../../components/sign-in/sign-in';
import CurrentLocationImage from '../../components/current-location-image/current-location-image';
import Spinner from '../../components/spinner/spinner';


export default function LoginPage(): JSX.Element {
  const isFetching = useAppSelector((state) => state.isFetching);

  if (isFetching) {
    return <Spinner />;
  }

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
