import React from 'react';

/**
 * MaintenanceMode Component
 * Provides a blank white space for both mobile and desktop to serve as a maintenance page.
 */
const MaintenanceMode = () => {
  return (
    <div 
      id="maintenance-page"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
        zIndex: 99999999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Blank white space for maintenance purposes */}
    </div>
  );
};

export default MaintenanceMode;
