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


export default function App(): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.ROOT} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.OFFER} element={<OfferPage />} />
            <Route path={AppRoute.LOGIN} element={
              <PrivateRoute isAuth login>
                <LoginPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.FAVORITES} element={
              <PrivateRoute isAuth>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}
