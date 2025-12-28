import { Helmet } from 'react-helmet-async';
import PreviewPhoto from './components/preview-photo/preview-photo';
import OfferWrapper from './components/offer-wrapper/offer-wrapper';
import Map from './components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import { IOfferProps } from '../../types.props';

export default function Offer({ offers }: IOfferProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <PreviewPhoto />
          <OfferWrapper />
          <Map />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlaceCard offer={offers[0]} />
                <PlaceCard offer={offers[2]} />
                <PlaceCard offer={offers[3]} />
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
