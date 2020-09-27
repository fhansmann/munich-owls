import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useQuery } from 'react-query';
import mapStyles from '../styles/mapStyles';
import { Spinner } from '@chakra-ui/core';

import { AlertWindow, LandingModal } from '.';

const libraries = ['places'];
const mapContainerStyle = {
  height: '90vh',
  width: '100vw'
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};
const center = {
  lat: 48.135124,
  lng: 11.581981
};

const zoom = 14;

async function fetchSightingsRequest() {
  const response = await (await fetch('/api/potholes')).json(); // Wes Bos Trick
  const { sightings } = response;
  return sightings;
}

export default function MapLanding() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  });
  const [selected, setSelected] = useState(null);

  const { data: sightings } = useQuery('sightings', fetchSightingsRequest);

  const onMapClick = () => (
    {
      // Redirect to Sign-in
    },
    []
  );

  return (
    <>
      {loadError ? (
        <ErrorModal />
      ) : !isLoaded ? (
        <Spinner
          thickness="6px"
          speed="0.4s"
          emptyColor="gray.200"
          color="red.400"
          size="xl"
          margin="150px auto 0"
        />
      ) : (
        <>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={zoom}
            center={center}
            options={options}
            onClick={onMapClick}
          >
            {Array.isArray(sightings) &&
              sightings.map((sighting) => (
                <Marker
                  key={sighting.id}
                  position={{ lat: sighting.latitude, lng: sighting.longitude }}
                  onClick={() => setSelected(sighting)}
                  icon={{
                    url: `/owl.svg`,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30)
                  }}
                />
              ))}

            {selected && (
              <AlertWindow
                selected={selected}
                close={() => setSelected(null)}
              />
            )}
          </GoogleMap>
          <LandingModal />
        </>
      )}
    </>
  );
}
