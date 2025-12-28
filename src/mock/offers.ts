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

/** Массив объектов с данными по предложениям аренды */
export const Offers: IOffer[] = [
  {
    id: 1,
    title: 'Wood and stone place',
    type: 'Apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
  },
  {
    id: 2,
    title: 'The Joshua Tree House',
    type: 'Hotel',
    price: 191,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
  },
  {
    id: 3,
    title: 'Wood and stone place',
    type: 'House',
    price: 820,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 50.938361,
        zoom: 13,
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 50.938361,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
  },
  {
    id: 4,
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 350,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      }
    },
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
  },
];
