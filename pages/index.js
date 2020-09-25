import React from 'react';
import Head from 'next/head';

import {
  ThemeProvider,
  CSSReset,
  theme,
  Flex,
  Image,
  Box,
  Link,
  Heading
} from '@chakra-ui/core';

import MapLanding from '../components/MapLanding';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Head>
        <title>Munich Owls</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
            <Link mr={5}>Sign in</Link>
            <Link mr={0}>About</Link>
          </Box>
        </Flex>
        <Flex>
          <MapLanding />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
