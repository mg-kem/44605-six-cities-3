// Подключение вспомогательных файлов
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useAppSelector } from '../../hooks/useStore';
import { AuthorizationStatus } from '../../const/const';

// Подключение типизации
import { IPrivateRouteProps } from '../../types/types.props';

// пропс login нужен только лишь для идентификации, чтобы отличить страницу входа от страницы избранного
export default function PrivateRoute({ children, isLoginPage }: IPrivateRouteProps) {
  const isAuth = useAppSelector((state) => state.isAuth);
  const isLoggedIn = isAuth === AuthorizationStatus.AUTH;

  if (isLoginPage) {
    return isLoggedIn ? <Navigate to={AppRoute.ROOT} /> : children;
  }
  return isLoggedIn ? children : <Navigate to={AppRoute.LOGIN} />;
}

