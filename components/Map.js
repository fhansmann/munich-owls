import { useState, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useQuery, useMutation, queryCache } from 'react-query';
import { Spinner, Flex, Box, useDisclosure } from '@chakra-ui/core';
import router from 'next/router';

import mapStyles from '../styles/mapStyles';
import { AlertWindow } from '.';
import { useAuth } from '../lib/auth';
import Locate from './index';
import Search from './Search';
import InputModal from './Modal';

const libraries = ['places'];
const mapContainerStyle = {
  height: '86vh',
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

async function createSightingRequest(sightingData) {
  const response = await fetch('/api/potholes/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sighting: sightingData })
  });
  const data = await response.json();
  const { sighting } = data;
  return sighting;
}

function useCreateSighting() {
  return useMutation(createSightingRequest, {
    onMutate: (sightingData) => {
      // 1) cancel queries
      queryCache.cancelQueries('sightings');

      // 2) save snapshot
      const snapshot = queryCache.getQueryData('sightings');

      // 3) optimistically update cache
      queryCache.setQueryData('sightings', (prev) => [
        ...prev,
        {
          id: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          ...sightingData
        }
      ]);

      // 4) return rollback function which reset cache back to snapshot
      return () => queryCache.setQueryData('sightings', snapshot);
    },
    onError: (error, sightingData, rollback) => rollback(),
    onSettled: () => queryCache.invalidateQueries('sightings')
  });
}

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  });
  const [selected, setSelected] = useState(null);
  const [geoData, setGeoData] = useState({});
  const auth = useAuth();
  const { data: sightings } = useQuery('sightings', fetchSightingsRequest);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [createSighting] = useCreateSighting();

  const onMapClick = (e) => {
    if (!auth.user) {
      return router.push('/signin');
    }
    onOpen();
    setGeoData(() => ({
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng()
    }));
    return geoData;
  };

  const onSubmit = (value) => {
    onClose();
    const { input: description } = value;
    return createSighting({
      description,
      ...geoData
    });
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  return (
    <>
      {!isLoaded ? (
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
            onLoad={onMapLoad}
          >
            {Array.isArray(sightings) &&
              sightings.map((sighting) => (
                <Marker
                  key={sighting.id}
                  position={{
                    lat: sighting.latitude,
                    lng: sighting.longitude
                  }}
                  onClick={() => setSelected(sighting)}
                  icon={{
                    url: `/marker.svg`,
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

            {auth.user && (
              <Box mt={4}>
                <Flex align="center" justify="center">
                  <Search panTo={panTo} />
                  <Locate panTo={panTo} />
                </Flex>
              </Box>
            )}
          </GoogleMap>

          <InputModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
        </>
      )}
    </>
  );
}

export default Map;
