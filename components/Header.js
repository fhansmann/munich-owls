import { Image, Link, Heading, Button, Flex } from '@chakra-ui/core';
import Search from './Search';
import SearchMobile from './Search';
import useDeviceDetect from '../utils/useDeviceDetect';

const Header = ({ panTo }) => {
  const { isMobile } = useDeviceDetect();
  return (
    <>
      {!isMobile ? (
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="space-between" alignItems="center">
            <Image height="55px" width="55px" src="owl.png" />
            <Heading as="h1" size="lg">
              {' '}
              OWLS{' '}
            </Heading>
          </Flex>

          <Flex>
            <Search panTo={panTo} />
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
      ) : (
        <Search panTo={panTo} />
      )}
    </>
  );
};

export default Header;
