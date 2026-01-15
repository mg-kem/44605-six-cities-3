import Layout from '../components/layout/layout';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Offer from '../pages/offer/offer';
import Favorites from '../pages/favorites/favorites';
import Error from '../pages/error/error';
import PrivateRoute from '../components/private-route/private-route';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { IAppProps } from '../types.props';

export default function App({ offers, cities, authorizationStatus }: IAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.root} element={<Layout />}>
            <Route index element={<Main offers={offers} cities={cities} />} />
            <Route path={AppRoute.offer} element={<Offer offers={offers} isAuth={authorizationStatus === AuthorizationStatus.Auth} />} />
            <Route path={AppRoute.login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} login>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites offers={offers} />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}
