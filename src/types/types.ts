/** Интерфейс для объекта-карточки локации */
export interface IOffer {
  id: number;
  title: string;
  type: string;
  price: number;
  city: cities;
  location: location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

interface cities {
  'name': string;
  'location': location;
}

interface location {
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
