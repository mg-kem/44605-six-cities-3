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
export type IOfferProps = IProps;
export type IMainProps = IProps;
export type ISearchOffersProps = IProps;
export type IFavoritesProps = IProps;
export type IFavoritesListProps = IProps;
export type IAppProps = IProps & {
  authorizationStatus: AuthorizationStatus;
};

export interface IPlaceCardProps {
  offer: IOffer;
  onMouseEnter?: () => void;
}

export interface IPlaceCardMiniProps {
  offer: IOffer;
}


