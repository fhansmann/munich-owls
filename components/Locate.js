import { Box, Image, Button } from '@chakra-ui/core';

function Locate({ panTo }) {
  return (
    <Button
      bg="transparent"
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
      <Box bg="transparent">
        <Image size="30px" src="/compass.svg" alt="compass" />
      </Box>
    </Button>
  );
}

export default Locate;
