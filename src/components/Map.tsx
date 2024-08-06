import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY || '';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    // @ts-expect-error - blah blah blah
    map.current = new maptilersdk.Map({
      // @ts-expect-error - blah blah blah
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });
    
    new maptilersdk.Marker({color: "#FF0000"})
    .setLngLat([139.7525,35.6846])
    .addTo(map.current!);
}, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
