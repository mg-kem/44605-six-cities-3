import { IOffer } from '../types/types';

/** Массив объектов с данными по предложениям аренды */
export const Offers: IOffer[] = [
  // Amsterdam (оригинальные 4 предложения + 1 дополнительное)
  {
    id: 1,
    title: 'Wood and stone place',
    type: 'Apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
  },
  {
    id: 5,
    title: 'Canal View Studio',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.899309666406198,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/25.jpg',
  },

  // Paris - 8 предложений
  {
    id: 6,
    title: 'Luxury Apartment near Eiffel Tower',
    type: 'Apartment',
    price: 250,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.858844,
      longitude: 2.294351,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
  },
  {
    id: 7,
    title: 'Charming Studio in Montmartre',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.886729,
      longitude: 2.343104,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
  },
  {
    id: 8,
    title: 'Boutique Hotel Le Marais',
    type: 'Hotel',
    price: 300,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.860642,
      longitude: 2.358456,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
  },
  {
    id: 9,
    title: 'Modern Loft in Latin Quarter',
    type: 'House',
    price: 180,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.848716,
      longitude: 2.345987,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
  },
  {
    id: 10,
    title: 'Elegant Suite near Louvre',
    type: 'Hotel',
    price: 420,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.861389,
      longitude: 2.336111,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/26.jpg',
  },
  {
    id: 11,
    title: 'Budget Room in 11th Arrondissement',
    type: 'Room',
    price: 65,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.863333,
      longitude: 2.379444,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/27.jpg',
  },
  {
    id: 12,
    title: 'Chic Apartment Champs-Élysées',
    type: 'Apartment',
    price: 550,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.871944,
      longitude: 2.303056,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/28.jpg',
  },
  {
    id: 13,
    title: 'Cozy Studio near Notre-Dame',
    type: 'apartment',
    price: 95,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 8,
      }
    },
    location: {
      latitude: 48.852778,
      longitude: 2.350000,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/29.jpg',
  },

  // Cologne - 3 предложения
  {
    id: 14,
    title: 'Apartment with Cathedral View',
    type: 'Apartment',
    price: 110,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.941349,
      longitude: 6.958307,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
  },
  {
    id: 15,
    title: 'Design Hotel in Old Town',
    type: 'Hotel',
    price: 170,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.935432,
      longitude: 6.952456,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
  },
  {
    id: 16,
    title: 'Cozy House near Rhine River',
    type: 'House',
    price: 200,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.932876,
      longitude: 6.967891,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
  },

  // Brussels - 5 предложений
  {
    id: 17,
    title: 'Penthouse with Grand Place View',
    type: 'Apartment',
    price: 220,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.847478,
      longitude: 4.352783,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  },
  {
    id: 18,
    title: 'Boutique Hotel Sablon',
    type: 'Hotel',
    price: 190,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.839451,
      longitude: 4.356712,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
  },
  {
    id: 19,
    title: 'Townhouse in European Quarter',
    type: 'House',
    price: 280,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.842119,
      longitude: 4.385642,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  },
  {
    id: 20,
    title: 'Modern Apartment Saint-Gilles',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.826543,
      longitude: 4.345987,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
  },
  {
    id: 21,
    title: 'Budget Hostel near EU Institutions',
    type: 'Hostel',
    price: 45,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 8,
      }
    },
    location: {
      latitude: 50.838056,
      longitude: 4.392222,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/30.jpg',
  },

  // Hamburg - 11 предложений (самый популярный город)
  {
    id: 22,
    title: 'Harbor View Apartment',
    type: 'Apartment',
    price: 150,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.548903,
      longitude: 9.987654,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
  },
  {
    id: 23,
    title: 'Design Hotel Speicherstadt',
    type: 'Hotel',
    price: 210,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.545123,
      longitude: 10.001234,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
  },
  {
    id: 24,
    title: 'House in Blankenese',
    type: 'House',
    price: 320,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.557891,
      longitude: 9.812345,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
  },
  {
    id: 25,
    title: 'Studio in Sternschanze',
    type: 'apartment',
    price: 95,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.562345,
      longitude: 9.965432,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
  },
  {
    id: 26,
    title: 'Luxury Apartment HafenCity',
    type: 'Apartment',
    price: 380,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.541667,
      longitude: 9.993056,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/31.jpg',
  },
  {
    id: 27,
    title: 'Budget Hostel St. Pauli',
    type: 'Hostel',
    price: 55,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.548056,
      longitude: 9.964722,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/32.jpg',
  },
  {
    id: 28,
    title: 'Business Hotel near Airport',
    type: 'Hotel',
    price: 185,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.630278,
      longitude: 9.988333,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/33.jpg',
  },
  {
    id: 29,
    title: 'Family House in Winterhude',
    type: 'House',
    price: 275,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.590278,
      longitude: 10.006389,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/34.jpg',
  },
  {
    id: 30,
    title: 'Studio Apartment Altona',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.550000,
      longitude: 9.935000,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/35.jpg',
  },
  {
    id: 31,
    title: 'Penthouse with Elbe View',
    type: 'Apartment',
    price: 520,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.543056,
      longitude: 9.984167,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/36.jpg',
  },
  {
    id: 32,
    title: 'Student Apartment near University',
    type: 'apartment',
    price: 75,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 8,
      }
    },
    location: {
      latitude: 53.566667,
      longitude: 9.983333,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/37.jpg',
  },

  // Dusseldorf - 6 предложений
  {
    id: 33,
    title: 'Apartment on Königsallee',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.225678,
      longitude: 6.774567,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/21.jpg',
  },
  {
    id: 34,
    title: 'Boutique Hotel Medienhafen',
    type: 'Hotel',
    price: 240,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.215432,
      longitude: 6.761234,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/22.jpg',
  },
  {
    id: 35,
    title: 'Modern House in Oberkassel',
    type: 'House',
    price: 350,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.231234,
      longitude: 6.745678,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/23.jpg',
  },
  {
    id: 36,
    title: 'Studio in Flingern',
    type: 'apartment',
    price: 105,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.221111,
      longitude: 6.798765,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/24.jpg',
  },
  {
    id: 37,
    title: 'Business Hotel Airport',
    type: 'Hotel',
    price: 160,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.289722,
      longitude: 6.766944,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/38.jpg',
  },
  {
    id: 38,
    title: 'Apartment in Altstadt',
    type: 'Apartment',
    price: 135,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 8,
      }
    },
    location: {
      latitude: 51.227222,
      longitude: 6.773889,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/39.jpg',
  },
];
