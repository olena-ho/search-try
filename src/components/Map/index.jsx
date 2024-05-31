import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import sourceOfHotels from '../../../Api/hotels.js';

 const containerStyle = {
  width: '100%',
  height: '100%'
}; 

const defaultCenter = {
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
  const [currentLocation, setCurrentLocation] = useState(null);
  const [displayInfo, setdisplayInfo] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user's location", error);
          setCurrentLocation(defaultCenter);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation(defaultCenter);
    }
  }, []);

  const handleMarkerClick = (i) => {
    setdisplayInfo(i);
  };

  return (
    <>
    <LoadScript googleMapsApiKey="AIzaSyBiJG97_IYoMHOFyLB-JmGfXWGQa9ocJ24"
    onError={handleLoadError}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || defaultCenter}
        zoom={10}
        onLoad={handleMapLoad}
      >
        {currentLocation && <Marker position={currentLocation} />}

{sourceOfHotels.map((hotel, i) => {

const descriptionWords = hotel.description.split(' ');
const shortenedDescription = descriptionWords.slice(0, 9).join(' ');

  return(
  <Marker
  key={i}
  position={{lat: hotel.location.latitude, lng: hotel.location.longitude}}
  onClick={() => handleMarkerClick(i)}
  >
    {displayInfo === i && (
      <InfoWindow onCloseClick={() => setdisplayInfo(null)}>
<div>
  <h3>{hotel.name}</h3>
  <p>{`${shortenedDescription}...`}</p>
</div>
      </InfoWindow>
    )}

  </Marker>
  );
})}

{currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
      </LoadScript>
      </>
  );
};

export default Map;
