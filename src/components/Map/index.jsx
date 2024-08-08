// Map.js
'use client';
import React from 'react';
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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Use environment variable
    libraries: ['places'],
  });

  if (loadError) {
    console.error('Error loading Google Maps:', loadError);
    return <div>Failed to load map</div>;
  }

  const lat = Number(dataImages?.items?.location_lat?.text);
  const lng = Number(dataImages?.items?.location_lng?.text);
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
      {/* Using AdvancedMarkerElement */}
      <div className="advanced-marker" onClick={redirectToGoogleMaps} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ff0000"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 4.86 5.88 11.52 6.18 11.86.18.2.44.2.62 0C13.12 20.52 19 13.86 19 9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
      </div>
    </GoogleMap>
  );
};

export default Map;
