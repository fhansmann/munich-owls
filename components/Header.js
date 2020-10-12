import { useState } from 'react';
import Link from 'next/link';
import { Box, Heading, Flex, Button, Image, Text } from '@chakra-ui/core';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useAuth } from '../lib/auth';

const MenuItems = (props) => {
  const { children, href } = props;
  return (
    <Text mr={{ base: 0, sm: 8 }} mb={{ base: 3, sm: 0 }} color="black">
      <Link href={href}>{children}</Link>
    </Text>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const auth = useAuth();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={4}
      px={8}
      bg={['gray.200', 'gray.200', 'transparent', 'transparent']}
      color={['white', 'white', 'gray.400', 'gray.400']}
    >
      <Flex align="center" mr={5}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" color="black">
            OWLS
          </Heading>
          <Image height="55px" width="55px" src="logo.png" />
        </Flex>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        {show ? (
          <MdClose size="25px" color="black" />
        ) : (
          <GiHamburgerMenu size="25px" color="black" />
        )}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems href="/"> Home </MenuItems>
          <MenuItems href="/about"> About </MenuItems>
          <MenuItems href="/map"> Show Map </MenuItems>
          {!auth.user ? (
            <Link href="/signin" passHref>
              <Button bg="transparent" border="1px solid black" color="black">
                Sign in
              </Button>
            </Link>
          ) : (
            <Link href="/" passHref>
              <Button bg="transparent" border="1px solid black" color="black">
                Sign out
              </Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
