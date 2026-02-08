// Подключаем вспомогательные файлы
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

// Подключаем константы
import { defaultIcon, customIcon } from '../../const/const';

// Подключаем типизацию
import { ICitiesMapProps } from '../../types/types.props';


export default function CitiesMap({ offers, selectedOffer, currentActiveCity }: ICitiesMapProps): JSX.Element {
  /** Определяю контейнер по ссылке mapRef */
  const mapRef = useRef<HTMLElement | null>(null);
  /** Инициализирую экземпляр карты с помощью кастом хука useMap */
  const map = useMap(mapRef, currentActiveCity);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet
        .layerGroup()
        .addTo(map);

      offers.forEach((offer) => {
        const marker = leaflet
          .marker([offer.location.latitude, offer.location.longitude]);

        marker.setIcon(
          selectedOffer && selectedOffer.title === offer.title
            ? customIcon
            : defaultIcon
        )
          .addTo(markerLayer);
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
