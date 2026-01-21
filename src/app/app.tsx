// Подключение вспомогательных файлов
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Подключение компонентов
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import ErrorPage from '../pages/error-page/error-page';
import Layout from '../components/layout/layout';
import PrivateRoute from '../components/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { AppRoute } from '../const/const';

// Подключение типизации
import { IAppProps } from '../types/types.props';


export default function App({ offers, cities, isAuth }: IAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.root} element={<Layout />}>
            <Route index element={
              <MainPage offers={offers} cities={cities} />
            }
            />

            <Route path={AppRoute.offer} element={
              <OfferPage offers={offers} cities={cities} isAuth={isAuth} />
            }
            />

            <Route path={AppRoute.login} element={
              <PrivateRoute isAuth={isAuth} login>
                <LoginPage />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.favorites} element={
              <PrivateRoute isAuth={isAuth}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
            />
          </Route>

          <Route path='*' element={
            <ErrorPage />
          }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}
