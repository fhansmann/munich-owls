import { Link, Button, Flex } from '@chakra-ui/core';

const MobileFooter = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100vw" h="7vh">
      <Link href="/signin" style={{ textDecoration: 'none' }} passHref>
        <Button
          size="sm"
          mr={3}
          backgroundColor="white"
          variantColor="teal"
          variant="ghost"
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
          variant="ghost"
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
  );
};

export default MobileFooter;
