/** Интерфейс глобального состояния */
export interface IInitialState {
  currentCity: ICity;
  sorting: TSortingType;
}

/** Интерфейс для объекта-карточки локации */
export interface IOffer {
  id: number;
  title: string;
  type: string;
  price: number;
  city: ICities;
  location: ILocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description?: string;
  images?: string[];
  goods?: string[];
  host?: IUserType;
  bedrooms?: number;
  maxAdults?: number;
}

export interface IUserType {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

interface ICities {
  'name': string;
  'location': ILocation;
}

interface ILocation {
  'latitude': number;
  'longitude': number;
  'zoom': number;
}

/** Интерфейс для объекта город */
export interface ICity {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  selected: boolean;
}

export interface IReview {
  id: number;
  rating: number;
  date: string;
  comment: string;
  user: IUserType;
}

export type TSortingType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

export type TToken = string;

export interface IAuthData {
  email: string;
  password: string;
}

export interface IOfferId {
  id: string;
}

export interface IUserData {
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
