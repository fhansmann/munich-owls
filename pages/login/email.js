import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Icon,
  useToast
} from '@chakra-ui/core';
/* import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useAuth } from '@/lib/auth'; */

const Login = () => {
  /*   const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { signinWithEmail } = useAuth();
  const { handleSubmit, register, errors } = useForm();

  const onLogin = ({ email, pass }) => {
    setLoading(true);
    signinWithEmail(email, pass).catch((error) => {
      setLoading(false);
      toast({
        title: 'An error occurred.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    });
  }; */

  return (
    <Flex align="center" justify="center" h="100vh" backgroundColor="white">
      <Stack
        as="form"
        backgroundColor="gray.100"
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Box as="a" href="/" aria-label="Back to homepage">
            <Icon color="black" name="info" size="64px" mb={4} />
          </Box>
        </Flex>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            autoFocus
            aria-label="Email Address"
            id="email"
            name="email"
            placeholder="munich@owls.com"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="pass"
            id="password"
            type="password"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <Button
          id="login"
          type="submit"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          h="50px"
          fontSize="lg"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Login
        </Button>
      </Stack>
    </Flex>
  );
};

export default Login;
