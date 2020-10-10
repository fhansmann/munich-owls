import { useState, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useQuery, useMutation, queryCache } from 'react-query';
import { Spinner, Flex } from '@chakra-ui/core';

import mapStyles from '../styles/mapStyles';

import { AlertWindow } from '.';

import useDeviceDetect from '../utils/useDeviceDetect';

const libraries = ['places'];
const mapContainerStyle = {
  height: '93vh',
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

export default function MapActive() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  });
  const [selected, setSelected] = useState(null);

  const { data: sightings } = useQuery('sightings', fetchSightingsRequest);

  const [createSighting] = useCreateSighting();

  const onMapClick = useCallback((e) => {
    createSighting({
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng()
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  const { isMobile } = useDeviceDetect();
  return (
    <>
      {loadError ? null : !isLoaded ? (
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
          <Flex flexDirection="column">
            <Flex>
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
              </GoogleMap>
            </Flex>
            {isMobile ? <Flex>null</Flex> : null}
          </Flex>
        </>
      )}
    </>
  );
}