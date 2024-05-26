import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 49.5,
  lng: 14.5
};

const handleLoadError = (e) => {
  console.error("Error loading Google Maps", e);
};

const handleMapLoad = (map) => {
  console.log("Map loaded successfully", map);
};

const Map = () => {
const [hotels, setHotels] = useState([]);

useEffect(() => {
  
})

  return (
    <LoadScript googleMapsApiKey="AIzaSyBiJG97_IYoMHOFyLB-JmGfXWGQa9ocJ24"
    onError={handleLoadError}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={handleMapLoad}
      >
        { /* Add any child components or markers here */ }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
