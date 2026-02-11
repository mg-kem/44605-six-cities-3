import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Временно закомментировал кастомные маркеры, так как они почти никогда корректно не грузятся в приложении
// const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
// const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const BACKEND_URL = 'https://15.design.htmlacademy.pro';
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;

/** Маршрутизация страниц */
export enum AppRoute {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '/404',
}

/** Перечисление "ручек" путей для роутинга к серверу */
export enum APIRoute {
  OFFERS = '/six-cities/offers',
  LOGIN = '/six-cities/login',
  LOGOUT = '/six-cities/logout',
  COMMENTS = '/six-cities/comments',
}

/** Перечисление статусов авторизации */
export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}

export const defaultIcon = leaflet.icon({
  iconUrl: '../../public/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const customIcon = leaflet.icon({
  iconUrl: '../../public/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
