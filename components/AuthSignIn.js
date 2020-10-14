/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  Icon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Link
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';

import { useAuth } from '../lib/auth';

const FullScreenAuth = ({ type, onSubmit }) => {
  const { handleSubmit, register, errors } = useForm();
  const auth = useAuth();
  return (
    <Flex align="center" justify="center" h="100vh">
      <Stack
        as="form"
        borderRadius={8}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit((data) => onSubmit(data))}
        px={8}
        py={12}
        register={register}
        shadow={[null, 'md']}
        spacing={3}
        type={type}
        w="100%"
        bg="#E5E5E5"
      >
        <FormControl isInvalid={errors.email && errors.email.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            autoFocus
            aria-label="Email Address"
            name="email"
            ref={register({
              required: 'Please enter your email.'
            })}
            placeholder="tim@owls.com"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.pass && errors.pass.message}>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="pass"
            type="password"
            ref={register({
              required: 'Please enter a password.'
            })}
          />
          <FormErrorMessage>
            {errors.pass && errors.pass.message}
          </FormErrorMessage>
        </FormControl>

        <Text fontSize="sm">
          Need an account? <Icon name="arrow-forward" size="16px" />
          <Link href="signup"> Sign up </Link>
        </Text>

        <Text fontSize="sm">
          <Link href="/"> Reset Password </Link>
        </Text>

        <Button type="submit" mt={4} variantColor="teal" variant="solid">
          {type}
        </Button>

        <Button
          onClick={() => auth.signinWithGoogle('/map')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon="google"
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          Continue with Google
        </Button>

        <Button
          onClick={() => auth.signinWithTwitter('/map')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon="twitter"
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          Continue with Twitter
        </Button>
      </Stack>
    </Flex>
  );
};

export default FullScreenAuth;
