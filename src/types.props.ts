import { AuthorizationStatus } from './const/const';
import { IOffer } from './mock/offers';

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
export type IMainProps = IProps;
export type IOffersContentProps = IProps;
export type ISearchOffersProps = IProps;
export type IFavoritesProps = IProps;
export type IFavoritesListProps = IProps;
export type IOfferProps = IProps & {
  isAuth: boolean;
};
export type IAppProps = IProps & {
  authorizationStatus: AuthorizationStatus;
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


