import { Image, Link, Heading, Button, Flex } from '@chakra-ui/core';

const Header = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="3px solid teal"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Image height="55px" width="55px" src="owl.png" />
          <Heading as="h1" size="lg">
            {' '}
            OWLS{' '}
          </Heading>
        </Flex>
        <Flex>
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
              Sign in
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
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
