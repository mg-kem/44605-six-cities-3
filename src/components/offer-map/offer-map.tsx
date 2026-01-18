// Подключение вспомогательных файлов
import { useRef } from 'react';
import { Cities } from '../../const/cities';
import useMap from '../../hooks/useMap';

// Подключение типизации
import { IOfferMapProps } from '../../types/types.props';


export default function OfferMap({ activeAdditionalOffer }: IOfferMapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, Cities[3]);

  // console.log(map, activeAdditionalOffer);

  return (
    <section className="offer__map map" ref={mapRef}></section>
  );
}
