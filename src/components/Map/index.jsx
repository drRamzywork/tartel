// 'use client';
// import React, { useEffect } from 'react';
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '470px',
//   borderRadius: '12px',
// };

// const options = {
//   styles: [
//     {
//       featureType: "all",
//       stylers: [{ visibility: "on" }]
//     },
//   ],
//   disableDefaultUI: true,
//   zoomControl: true,
// };

// const Map = ({ dataImages }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   useEffect(() => {
//     console.log('Google Maps API key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//     console.log('Map loaded:', isLoaded);
//     console.log('Load error:', loadError);

//     if (isLoaded) {
//       const lat = Number(dataImages?.items?.location_lat?.text) || 24.14691252116138;
//       const lng = Number(dataImages?.items?.location_lng?.text) || 47.3199603;

//       const mapCenter = { lat, lng };
//       const zoomLevel = 15;

//       const map = new google.maps.Map(document.getElementById('map'), {
//         center: mapCenter,
//         zoom: zoomLevel,
//         options: options
//       });

//       const marker = new google.maps.Marker({
//         map: map,
//         position: mapCenter,
//         title: "Click to see directions"
//       });

//       const redirectToGoogleMaps = () => {
//         window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
//       };

//       marker.addListener('click', redirectToGoogleMaps);
//     }
//   }, [isLoaded, loadError, dataImages]);

//   if (loadError) {
//     console.error('Error loading Google Maps:', loadError);
//     return <div>Failed to load map</div>;
//   }

//   return <div id="map" style={mapContainerStyle}>Loading map...</div>;
// };

// export default Map;



import React from 'react';
import { GoogleMap, Marker, OverlayView, useLoadScript } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


const mapContainerStyle = {
  width: '100%',
  height: '100%',
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




const Map = ({ dataContentDetails, dataMapData }) => {
  const router = useRouter();

  const onMarkerClick = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(directionsUrl, '_blank');
  };



  const center = {
    lat: 24.470901,
    lng: 39.612236,
  };








  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0',
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Maps...</div>;

  const icon = dataContentDetails?.icon;
  const images1 = icon?.includes(',') ? icon.split(',') : [icon];


  return (
    <div >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={options}
        >

          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            onClick={onMarkerClick}
          >

          </OverlayView>

        </GoogleMap>
      </motion.div>
    </div>
  );
};

export default Map;
