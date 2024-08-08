// Map.js
'use client';
import React, { useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '470px',
  borderRadius: '12px',
};

const options = {
  styles: [
    {
      featureType: "all",
      stylers: [{ visibility: "on" }]
    },
  ],
  disableDefaultUI: true,
  zoomControl: true,
  mapId: 'DEMO_MAP_ID', // Replace with your actual Map ID
};

const libraries = ['marker']; // Add the 'marker' library

const Map = ({ dataImages }) => {
  console.log('Google Maps API Key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY); // Add logging
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const lat = Number(dataImages?.items?.location_lat?.text);
      const lng = Number(dataImages?.items?.location_lng?.text);
      const mapCenter = {
        lat: lat,
        lng: lng,
      };

      const map = new google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 15,
        options,
      });

      google.maps.importLibrary('marker').then(({ AdvancedMarkerElement }) => {
        const marker = new AdvancedMarkerElement({
          map,
          position: mapCenter,
          title: 'Location',
        });

        marker.addListener('click', () => {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
        });
      });
    }
  }, [isLoaded, dataImages]);

  if (loadError) {
    console.error('Error loading Google Maps:', loadError);
    return <div>Failed to load map</div>;
  }

  if (!isLoaded) return <div>Loading map...</div>;

  return <div ref={mapRef} style={mapContainerStyle}></div>;
};

export default Map;
