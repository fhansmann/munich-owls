import React from 'react';
import { Flex, Image, Box, Link, Heading } from '@chakra-ui/core';
import MapLanding from '../components/MapLanding';

const App = () => {
  return (
    <Flex flexDirection="column" alignItems="space-between">
      <Box pos="absolute" top="5" left="5" zIndex={10}>
        <Flex justifyContent="space-between">
          <Image height="30px" width="30px" src="owl.png" />
          <Heading as="h1" size="lg">
            {' '}
            MUNICH OWLS{' '}
          </Heading>
        </Flex>
      </Box>
      <Box pos="absolute" top="5" right="5" zIndex={10}>
        <Link mr={5} href="/signin">
          Sign in
        </Link>
        <Link mr={0} href="/about">
          About
        </Link>
      </Box>
      <Flex>
        <MapLanding />
      </Flex>
    </Flex>
  );
};

export default App;
