import { IOffer, ICity, IReview, TSortingType, IUserType } from './types';

export interface ICityNavigationProps {
  currentCity: ICity;
  onChangeCity: (city: ICity) => void;
}

// ?
export interface IOfferImagesProps {
  images: string[];
}

export interface IOffersContainerProps {
  offers: IOffer[];
  currentCity: ICity;
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
  currentActiveCity: ICity;
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
  isLoginPage?: boolean;
}

export interface IFavoritesListProps {
  offers: IOffer[];
}
export interface IPlaceCardMiniProps {
  offer: IOffer;
}

export interface IOfferWrapperProps {
  currentOffer?: IOffer;
  reviewsByCurrentOffer?: IReview[];
}

// export interface IOfferReviewsProps {
//   isAuth: boolean;
// }

export interface IReviewListProps {
  reviews: IReview[];
}

export interface IReviewItemProps {
  review: IReview;
}

export interface ISortingProps {
  handleChangeSorting: (sorting: TSortingType) => void;
}

export interface IOwnerDescriptionProps {
  hostData: IUserType | null;
}
