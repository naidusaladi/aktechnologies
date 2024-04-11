// Preloader.js
import React from 'react';
import './Preloader.css'; // You'll create this CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
      <div >Loading...</div>
      {/* You can add a message here, like "Loading..." */}
    </div>
  );
}

export default Preloader;
