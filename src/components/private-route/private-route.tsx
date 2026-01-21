// Подключение вспомогательных файлов
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';

// Подключение типизации
import { IPrivateRouteProps } from '../../types/types.props';


export default function PrivateRoute({ children, isAuth, login }: IPrivateRouteProps) {
  if (login) {
    return isAuth ? <Navigate to={AppRoute.root} /> : children;
  }
  return isAuth ? children : <Navigate to={AppRoute.login} />;
}

