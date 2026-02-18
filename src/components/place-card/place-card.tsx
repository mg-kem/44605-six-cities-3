import { Link, generatePath } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { IPlaceCardProps } from '../../types/types.props';
import { toggleFavoriteOfferAsyncAction } from '../../store/thunks/favorites';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { toast } from 'react-toastify';
import { getReverseBooleanValue } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';


export default function PlaceCard({ offer, onMouseEnter }: IPlaceCardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const isLoggedIn = isAuth === AuthorizationStatus.AUTH;
  const { id, price, previewImage, title, type, rating, isFavorite, isPremium } = offer;
  const ratingWidth = rating ? `${Math.round((100 / 5) * rating)}%` : '0%';
  const offerPath = generatePath(AppRoute.OFFER, { id: String(id) });

  const handleChangeFavoriteStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isLoggedIn) {
      navigate(AppRoute.LOGIN);
      return;
    }
    dispatch(toggleFavoriteOfferAsyncAction({ id, isFavorite: getReverseBooleanValue(isFavorite) }))
      .unwrap()
      .catch(() => {
        toast.error('Произошла ошибка обращения к серверу. Повторите попытку');
      });
  };

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter}>
      <Link to={offerPath} className="place-card__link">
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
              type="button"
              onClick={handleChangeFavoriteStatus}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingWidth }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>
    </article>
  );
}
