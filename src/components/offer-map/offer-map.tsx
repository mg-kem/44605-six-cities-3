// Подключение вспомогательных файлов
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { defaultIcon, customIcon } from '../../const/const';
import { ICity, IOffer } from '../../types/types';
// Подключение типизации

interface IOfferMapProps {
  currentCity: ICity;
  currentOffer: IOffer;
  nearbyOffers: IOffer[];
}

export default function OfferMap({ currentCity, currentOffer, nearbyOffers }: IOfferMapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet
        .layerGroup()
        .addTo(map);

      nearbyOffers.slice(0, 3).forEach((offer) => {
        const marker = leaflet
          .marker([offer.location.latitude, offer.location.longitude])
          .setIcon(defaultIcon);

        marker.addTo(markerLayer);
      });

      const currentMarker = leaflet
        .marker([currentOffer.location.latitude, currentOffer.location.longitude])
        .setIcon(customIcon);

      currentMarker.addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffer, nearbyOffers]);

  return (
    <section className="offer__map map" ref={mapRef}></section>
  );
}
