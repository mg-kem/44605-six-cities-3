// Подключаем вспомогательные файлы
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { defaultIcon, customIcon } from '../../const/const';
import { ICitiesMapProps } from '../../types/types.props';


export default function CitiesMap({ offers, selectedOffer, currentCity }: ICitiesMapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = leaflet.marker([offer.location.latitude, offer.location.longitude]);
        marker.setIcon(
          selectedOffer && selectedOffer.id === offer.id
            ? customIcon
            : defaultIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]); // Компонент монтируется и при изменении одного из компонентов массива зависимостей снова вызовет useEffect()


  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
