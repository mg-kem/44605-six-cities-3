import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


/** Маршрутизация страниц */
export enum AppRoute {
  root = '/',
  login = '/login',
  favorites = '/favorites',
  offer = '/offer/:id'
}

/** Перечисление статусов авторизации */
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const isAuthorized = () => AuthorizationStatus.Auth;

/** Временная функция для получения статуса авторизации */
export const isAuth = () => {
  if (isAuthorized() !== AuthorizationStatus.Auth) {
    return false;
  }
  return true;
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const customIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
