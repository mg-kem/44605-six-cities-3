// Подключение вспомогательных файлов
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ICity } from '../types/types';


export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: ICity | undefined): leaflet.Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderMap = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderMap.current && city) {
      const instanceMap = leaflet
        .map(mapRef.current)
        .setView([city.lat, city.lng], city.zoom);
      const layer = leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        });

      instanceMap.addLayer(layer);
      setMap(instanceMap);
      isRenderMap.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => () => {
    if (map) {
      map.remove();
      isRenderMap.current = false;
      setMap(null);
    }
  }, [map]);

  useEffect(() => {
    if (map && city) {
      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [map, city]);

  return map;
}
