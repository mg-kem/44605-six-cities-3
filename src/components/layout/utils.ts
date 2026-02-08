import { AppRoute } from '../../const/const';

export function getLayoutState(pathName: AppRoute) {
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
}
