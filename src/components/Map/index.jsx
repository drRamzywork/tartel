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

  const mapCenter = {
    lat: dataImages.items.location_lat.text,  // Example coordinates
    lng: dataImages.items.location_lng.text,
  };
  const zoomLevel = 15;

  const redirectToGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${dataImages.items.location_lat.text} ,${dataImages.items.location_lng.text}`, '_blank');
  };


  if (!isLoaded) return <div>Loading Maps...</div>;

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
