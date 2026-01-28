import { IOffer, ICity, IReview } from './types';


// Типизация для pages
export interface IAppProps {
  offers: IOffer[];
  cities: ICity[];
  reviews: IReview[];
  isAuth: boolean;
}

export interface IFavoritePageProps {
  offers: IOffer[];
}

export interface IMainPageProps {
  offers: IOffer[];
  cities: ICity[];
}

export interface IOfferPageProps {
  offers: IOffer[];
  cities: ICity[];
  reviews: IReview[];
  isAuth: boolean;
}


// Типизация для components
export interface ICityNavigationProps {
  cities: ICity[];
  activeCity: ICity;
  onChangeCity: (city: ICity) => void;
}

export interface IOffersContainerProps {
  offers: IOffer[];
  activeCity: ICity;
}

export interface IPlacesFoundProps {
  filteredOffers: IOffer[] | null;
}

export interface IPlaceCardProps {
  offer: IOffer;
  onMouseEnter?: () => void;
}

export interface ICitiesMapProps {
  offers: IOffer[];
  selectedOffer: IOffer | null;
  activeCity: ICity;
}

export interface IOfferMapProps {
  selectedOffer: IOffer | null;
  presentedCity?: ICity;
  randomOffers?: IOffer[];
}

export interface IEmptyProps {
  classDiv: string;
  classB?: string;
  classP?: string;
  boldContent: string;
  paragraph: string;
}

export interface IPrivateRouteProps {
  children: JSX.Element;
  isAuth: boolean;
  login?: boolean;
}

export interface IFavoritesListProps {
  offers: IOffer[];
}
export interface IPlaceCardMiniProps {
  offer: IOffer;
}

export interface IOfferWrapperProps {
  isAuth: boolean;
  currentOffer?: IOffer;
  reviews: IReview[];
}

export interface IOfferReviewsProps {
  isAuth: boolean;
  reviews: IReview[];
}

export interface IReviewListProps {
  reviews: IReview[];
}

export interface IReviewItemProps {
  review: IReview;
}
