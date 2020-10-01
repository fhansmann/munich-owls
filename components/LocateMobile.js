import React from 'react';
function Locate({ panTo }) {
  return (
    <button
      className="locateMobile"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

export default Locate;
