import { useEffect, useState, MutableRefObject, useRef } from 'react';
import leaflet from 'leaflet';
import { City } from '../mock/cities';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City | undefined
): leaflet.Map | null {

  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderMap = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderMap.current) {
      const instanceMap = leaflet
        .map(mapRef.current)
        .setView([city?.lat || 0, city?.lng || 0], city?.zoom || 0);
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

  return map;
}
