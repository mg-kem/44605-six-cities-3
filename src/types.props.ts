import { AuthorizationStatus } from './const/const';
import { IOffer } from './mock/offers';
import { City } from './mock/cities';

/** Интерфейс для пропс пустой страницы */
export interface IEmptyProps {
  classDiv: string;
  classB?: string;
  classP?: string;
  boldContent: string;
  paragraph: string;
}

export interface IPrivateRouteProps {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
  login?: boolean;
}
/** Универсальный интерфейс для Props */
interface IProps<T = IOffer[]> {
  offers: T;
}

/** Алиасы универсального интерфейса */
export type IOffersContentProps = IProps;
export type IFavoritesProps = IProps;
export type IFavoritesListProps = IProps;
export interface ICitiesNavigationProps {
  cities: City[];
}
export type IOfferProps = IProps & {
  isAuth: boolean;
};
export type ISearchOffersProps = IProps & {
  cities: City[];
};
export type IMainProps = IProps & {
  cities: City[];
};
export type IAppProps = IProps & {
  cities: City[];
  authorizationStatus: AuthorizationStatus;
};
export type IMapProps = IProps & {
  selectedOffer: IOffer | null;
};

export interface IOfferWrapperProps {
  isAuth: boolean;
}

export interface IPlaceCardProps {
  offer: IOffer;
  onMouseEnter?: () => void;
}

export interface IPlaceCardMiniProps {
  offer: IOffer;
}


