// App.js
import React, { useState } from 'react';
import Profile from './Profile';
import MapContainer from './MapContainer';
import profilesData from './profilesData';
import './App.css'; 


function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (name) => {
    setSelectedProfile(name);
  };

  return (
    <div className="App">
      <h1>Profiles</h1>
      <div className="profiles-container">
        {profilesData.map((profile, index) => (
          <Profile
            key={index}
            name={profile.name}
            photo={profile.photo}
            description={profile.description}
            onSummaryClick={handleSummaryClick}
            className="profile-box" // Add className here
          />
        ))}
      </div>
      <div className="map-container">
        {selectedProfile && (
          <MapContainer
            profile={profilesData.find(profile => profile.name === selectedProfile)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
