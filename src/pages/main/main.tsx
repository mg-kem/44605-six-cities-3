
import SearchOffers from './components/search-offers/search-offers';
import { Helmet } from 'react-helmet-async';
import { IMainProps } from '../../types.props';

export default function Main({ offers }: IMainProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title> Главная </title>
      </Helmet>
      <SearchOffers offers={offers} />
    </>
  );
}
