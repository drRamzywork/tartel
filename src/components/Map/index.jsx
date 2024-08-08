// Map.js
'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

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

  if (loadError) {
    console.error('Errorrrrrrr loading Google Maps:', loadError);
    return <div>Failed to load map</div>;
  }

  const lat = Number(dataImages?.items?.location_lat?.text) || 24.14691252116138;
  const lng = Number(dataImages?.items?.location_lng?.text) || 47.3199603;



  const mapCenter = {
    lat: lat,
    lng: lng,
  };
  const zoomLevel = 15;

  const redirectToGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      zoom={zoomLevel}
      options={options}
    >
      <Marker
        position={mapCenter}
        onClick={redirectToGoogleMaps}
      />
    </GoogleMap>
  );
};

export default Map;
