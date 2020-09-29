import Link from 'next/link';
import { useState } from 'react';
import ReactDelayRender from 'react-delay-render';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
  theme,
  ThemeProvider
} from '@chakra-ui/core';

const LandingModal = () => {
  const [isOpen, setIsShowing] = useState(true);
  const toggle = () => {
    setIsShowing(!isOpen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal isOpen={isOpen} onClose={toggle} size={'xl'} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome To Munich Owls!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Flex flexDirection="column" m={5}>
                  <Image
                    size="150px"
                    src="cyclist.png"
                    alt="cyclist"
                    objectFit="cover"
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  flexDirection="column"
                  mb={5}
                  maxW="350px"
                  textAlign="center"
                >
                  <Heading size="sm" lineHeight="1.4" minW="380px">
                    A vibrant community dedicated to improve the cycling and
                    scootering experience in Munich.
                  </Heading>
                </Flex>
              </Flex>
              <Flex justifyContent="center">
                <List spacing={3}>
                  <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
                    Mark dangerous potholes and other obstacles
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
                    See what others have marked and avoid dangerous routes
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
                    Let your city planners know where they need to improve
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                </List>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Link href="/" passHref>
                <Button
                  mr={3}
                  backgroundColor="gray.400"
                  color="white"
                  fontWeight="medium"
                  _hover={{ bg: 'gray.300' }}
                  _active={{
                    bg: 'gray.400',
                    transform: 'scale(0.95)'
                  }}
                >
                  Show me the owls!
                </Button>
              </Link>

              <Link href="/about" passHref>
                <Button
                  mr={3}
                  backgroundColor="gray.400"
                  color="white"
                  fontWeight="medium"
                  _hover={{ bg: 'gray.200' }}
                  _active={{
                    bg: 'gray.300',
                    transform: 'scale(0.95)'
                  }}
                >
                  Learn more
                </Button>
              </Link>

              <Link href="/signin" passHref>
                <Button
                  mr={3}
                  backgroundColor="red.300"
                  color="white"
                  fontWeight="medium"
                  _hover={{ bg: 'red.200' }}
                  _active={{
                    bg: 'red.400',
                    transform: 'scale(0.95)'
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default ReactDelayRender({ delay: 3500 })(LandingModal);
