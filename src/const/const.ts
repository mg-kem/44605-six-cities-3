import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const BACKEND_URL = 'https://15.design.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

/** Маршрутизация страниц */
export enum AppRoute {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id'
}

/** Перечисление "ручек" путей для роутинга к серверу */
export enum APIRoute {
  OFFERS = '/offers',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

/** Перечисление статусов авторизации */
export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}

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

export const offersOption = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

/** Временная функция для получения статуса авторизации */
const isAuthorized = () => AuthorizationStatus.AUTH;
export const isAuth = () => isAuthorized() === AuthorizationStatus.AUTH;
