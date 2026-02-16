import { IOffer, TSortingType } from '../types/types';
import { AppRoute } from '../const/const';

export const getSortedOffers = (offers: IOffer[], currentSorting: TSortingType): IOffer[] => {
  const newOffers = [...offers];
  newOffers.sort((a, b) => {
    switch (currentSorting) {
      case 'Popular':
        return 0;
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
    }
  });
  return newOffers;
};

export const getLayoutState = (pathName: AppRoute) => {
  let linkClassName = '';
  let divClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  switch (pathName) {
    case (AppRoute.ROOT):
      divClassName = 'page--gray page--main';
      linkClassName = 'header__logo-link--active';
      break;
    case (AppRoute.LOGIN):
      divClassName = 'page--gray page--login';
      shouldRenderUser = false;
      break;
    case (AppRoute.FAVORITES):
      shouldRenderFooter = true;
      break;
  }

  return { linkClassName, divClassName, shouldRenderUser, shouldRenderFooter };
};

export const getReverseBooleanValue = (favorite: boolean): number => {
  if (favorite) {
    return 0;
  }
  return 1;
};

