import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { IPrivateRouteProps } from '../../types.props';

export default function PrivateRoute({ children, authorizationStatus, login }: IPrivateRouteProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (login) {
    return isAuthorized ? <Navigate to={AppRoute.root} /> : children;
  }
  return isAuthorized ? children : <Navigate to={AppRoute.login} />;
}

