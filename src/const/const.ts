/** string[] - указываю тип, что это будет массив [] с строковыми значениями string */
export const NameOfCities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

/** Временная функция для получения статуса авторизации */
export const authorizationStatus = () => AuthorizationStatus.Auth;
