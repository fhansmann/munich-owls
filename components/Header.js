import { Image, Box, Link, Heading, Button } from '@chakra-ui/core';

const Header = ({ children }) => {
  return (
    <>
      <Box pos="absolute" top="8px" left="10px" zIndex={10}>
        <Image height="55px" width="55px" src="owl.png" />
      </Box>

      <Heading
        as="h1"
        size="lg"
        pos="absolute"
        top="20px"
        left="56px"
        zIndex={10}
      >
        {' '}
        OWLS{' '}
      </Heading>

      <Box pos="absolute" top="5" right="5" zIndex={15}>
        <Link href="/signin" style={{ textDecoration: 'none' }} passHref>
          <Button
            size="sm"
            mr={3}
            backgroundColor="white"
            variantColor="teal"
            variant="outline"
            fontWeight="medium"
            _active={{
              bg: 'gray.300',
              transform: 'scale(0.95)'
            }}
          >
            {children}
          </Button>
        </Link>
        <Link href="/about" style={{ textDecoration: 'none' }} passHref>
          <Button
            size="sm"
            mr={3}
            backgroundColor="white"
            variantColor="teal"
            variant="outline"
            fontWeight="medium"
            _active={{
              bg: 'gray.300',
              transform: 'scale(0.95)'
            }}
          >
            About
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Header;
