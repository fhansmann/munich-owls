import React from 'react';
import MapActive from '../components/MapActive';
import Header from '../components/Header';
import useDeviceDetect from '../utils/useDeviceDetect';

const Active = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <>
      {!isMobile && <Header> Sign out</Header>}
      <MapActive />
    </>
  );
};

export default Active;
