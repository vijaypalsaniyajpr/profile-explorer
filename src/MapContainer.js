// MapContainer.js
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google, profile }) => {
  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{ lat: profile.latitude, lng: profile.longitude }}
    >
      <Marker
        position={{ lat: profile.latitude, lng: profile.longitude }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
