// Подключение вспомогательных файлов
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { defaultIcon, customIcon } from '../../const/const';

// Подключение типизации
import { IOfferMapProps } from '../../types/types.props';


export default function OfferMap({ selectedOffer, presentedCity, randomOffers }: IOfferMapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, presentedCity);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet
        .layerGroup()
        .addTo(map);

      randomOffers?.forEach((offer) => {
        const marker = leaflet
          .marker([offer.location.latitude, offer.location.longitude])
          .setIcon(
            selectedOffer && selectedOffer.title === offer.title
              ? customIcon
              : defaultIcon
          );

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, randomOffers, selectedOffer]);

  return (
    <section className="offer__map map" ref={mapRef}></section>
  );
}
