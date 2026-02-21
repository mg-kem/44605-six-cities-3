import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { getLayoutState } from '../../utils/utils';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { logoutAsyncAction } from '../../store/thunks/user';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { memo } from 'react';

function Layout(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const offers = useAppSelector((state) => state.offers.offers);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const userData = useAppSelector((state) => state.user.userData);
  const countFavoritesOffers = offers.filter((offer) => offer.isFavorite).length;
  const isLoggedIn = isAuth === AuthorizationStatus.AUTH;
  const { linkClassName, divClassName, shouldRenderUser, shouldRenderFooter } = getLayoutState(pathname as AppRoute);

  const handleLogout = () => {
    dispatch(logoutAsyncAction())
      .unwrap()
      .then(() => {
        navigate(AppRoute.LOGIN);
      })
      .catch(() => {
        toast.error('Произошла ошибка обращения к серверу. Повторите попытку');
      });
  };

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
                  {isLoggedIn ?
                    <>
                      <li className="header__nav-item user">
                        <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                            <img src={userData?.avatarUrl} />
                          </div>
                          <span className="header__user-name user__name">{userData?.email}</span>
                          <span className="header__favorite-count">{countFavoritesOffers}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link to='#' className="header__nav-link" >
                          <span className="header__signout" onClick={handleLogout}>Sign out</span>
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

export default memo(Layout);
