export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  checked: boolean;
}

export const Cities: City[] = [
  {
    title: 'Amsterdam',
    lat: 52.33,
    lng: 4.90,
    zoom: 11,
    checked: true
  },
  {
    title: 'Paris',
    lat: 48.51,
    lng: 2.21,
    zoom: 10,
    checked: false
  },
  {
    title: 'Cologne',
    lat: 50.55,
    lng: 6.57,
    zoom: 10,
    checked: false
  },
  {
    title: 'Brussels',
    lat: 50.50,
    lng: 4.21,
    zoom: 10,
    checked: false
  },
  {
    title: 'Hamburg',
    lat: 53.33,
    lng: 10.00,
    zoom: 10,
    checked: false
  },
  {
    title: 'Dusseldorf',
    lat: 51.13,
    lng: 6.47,
    zoom: 10,
    checked: false
  }
];
