import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Button,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Box,
  Image,
  Text
} from '@chakra-ui/core';
import { useAuth } from '../lib/auth';

const ListItems = ({ children }) => {
  return (
    <ListItem mb={3} fontSize="md">
      <ListIcon icon="check-circle" color="gray.500" />
      {children}
    </ListItem>
  );
};

export default function Hero({ title, subtitle }) {
  const auth = useAuth();
  return (
    <Flex
      align="center"
      justify={{
        base: 'center',
        md: 'space-between',
        xl: 'space-between'
      }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        width={{ base: '300px', md: '500px' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          fontSize={['md', 'md', 'lg', 'xl']}
          color="black"
          fontWeight="bold"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          color="black"
          fontWeight="normal"
          fontSize={['md', 'md', 'lg', 'xl']}
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>

        <Flex>
          <List spacing={2}>
            <ListItems>Mark dangerous potholes and other obstacles</ListItems>
            <ListItems>
              See what others have marked and avoid dangerous routes
            </ListItems>
            <ListItems>
              Let your city planners know where they need to improve
            </ListItems>
          </List>
        </Flex>
        <Flex width={{ base: '300px', md: '500px' }} justify="start">
          <Link href="/map" passHref>
            <Button
              size="md"
              mr={3}
              backgroundColor="gray.200"
              color="black"
              fontWeight="medium"
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.200',
                transform: 'scale(0.95)'
              }}
            >
              Show me the owls!
            </Button>
          </Link>
          {!auth?.user ? (
            <Link href="/signin" passHref>
              <Button
                size="md"
                mr={3}
                backgroundColor="teal.500"
                color="white"
                fontWeight="medium"
                _hover={{ bg: 'teal.400' }}
                _active={{
                  bg: 'teal.600',
                  transform: 'scale(0.95)'
                }}
              >
                Sign in
              </Button>
            </Link>
          ) : null}
        </Flex>
      </Stack>

      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image
          size={{ base: '300px', md: '440px' }}
          src="landing.svg"
          alt="map-example"
          objectFit="cover"
          bg="transparent"
          width={{ base: '300px', md: '500px' }}
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Hero.defaultProps = {
  title: 'Welcome to Munich Owls!',
  subtitle:
    'We are a community dedicated to improve the individual transport experience in Munich.'
};
