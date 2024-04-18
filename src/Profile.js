// Profile.js
import React, { useState } from 'react';

const Profile = ({ name, photo, description, onSummaryClick }) => {
  const handleClick = () => {
    onSummaryClick(name);
  };

  return (
    <div className="profile">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Summary</button>
    </div>
  );
};

export default Profile;
