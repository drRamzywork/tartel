'use client';
import React from 'react';
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0',
  });


  const lat = Number(dataImages?.items?.location_lat?.text);
  const lng = Number(dataImages?.items?.location_lng?.text);
  const mapCenter = {
    lat: lat,
    lng: lng,
  };
  const zoomLevel = 15;

  const redirectToGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat} ,${lng}`, '_blank');
  };



  if (!isLoaded) return <div></div>;

  return (
    <>

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
    </>

  );
};

export default Map;
