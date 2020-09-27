import React from 'react';
import { Flex, Image, Box, Link, Heading } from '@chakra-ui/core';
import MapActive from '../components/MapActive';

const Active = () => {
  return (
    <Flex flexDirection="column" alignItems="space-between">
      <Flex alignItems="center" justifyContent="space-between" bg="#ffffff">
        <Flex alignItems="center">
          <Image height="65px" width="65px" src="owl.png" />
          <Heading as="h1" size="lg">
            {' '}
            MUNICH OWLS{' '}
          </Heading>
        </Flex>
        <Box mr={5}>
          <Link mr={5}>Sign out</Link>
          <Link mr={0}>About</Link>
        </Box>
      </Flex>
      <Flex>
        <MapActive />
      </Flex>
    </Flex>
  );
};

export default Active;