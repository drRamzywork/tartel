'use client';
import React, { useEffect } from 'react';
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
};

const Map = ({ dataImages }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    console.log('Google Maps API key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    console.log('Map loaded:', isLoaded);
    console.log('Load error:', loadError);

    if (isLoaded) {
      const lat = Number(dataImages?.items?.location_lat?.text) || 24.14691252116138;
      const lng = Number(dataImages?.items?.location_lng?.text) || 47.3199603;

      const mapCenter = { lat, lng };
      const zoomLevel = 15;

      const map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: zoomLevel,
        options: options
      });

      const marker = new google.maps.Marker({
        map: map,
        position: mapCenter,
        title: "Click to see directions"
      });

      const redirectToGoogleMaps = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
      };

      marker.addListener('click', redirectToGoogleMaps);
    }
  }, [isLoaded, loadError, dataImages]);

  if (loadError) {
    console.error('Error loading Google Maps:', loadError);
    return <div>Failed to load map</div>;
  }

  return <div id="map" style={mapContainerStyle}>Loading map...</div>;
};

export default Map;
