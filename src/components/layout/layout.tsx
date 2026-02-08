import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { getLayoutState } from './utils';
import { isAuth } from '../../const/const';
import { useAppSelector } from '../../hooks/useStore';

export default function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const countFavoritesOffers = favoritesOffers.length;

  const { linkClassName, divClassName, shouldRenderUser, shouldRenderFooter } = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page ${divClassName}`}>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className={`header__logo-link ${linkClassName}`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>

            {shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">

                  {isAuth() ?
                    <>
                      <li className="header__nav-item user">
                        <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">{countFavoritesOffers}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link to='#' className="header__nav-link" >
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                    :
                    <li className="header__nav-item user">
                      <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile" >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>}

                </ul>
              </nav>
            ) : null}

          </div>
        </div>
      </header >

      <Outlet />

      {shouldRenderFooter ? (
        <footer className="footer container">
          <Link to='/' className="footer__logo-link" >
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      ) : null}

    </div >
  );
}
