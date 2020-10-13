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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
  useToast,
  Checkbox
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useAuth } from '../lib/auth';
import { Text } from '@chakra-ui/core';
import { Link } from '@chakra-ui/core';

const AuthContent = ({ register, errors, type, ...rest }) => {
  const auth = useAuth();

  return (
    <Stack {...rest}>
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
        <Link href="signup"> Reset Password </Link>
      </Text>
      <Checkbox size="sm" variantColor="teal" defaultIsChecked>
        <Link href="impressum"> View & accept privacy and cookies policy </Link>
      </Checkbox>

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
  );
};

const FullScreenAuth = ({ type, onSubmit }) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Flex align="center" justify="center" h="100vh">
      <AuthContent
        as="form"
        backgroundColor={['none']}
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
        bg="gray.200"
      />
    </Flex>
  );
};

const AuthModal = ({ isOpen, onClose, type, onSubmit }) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="400px">
      <ModalOverlay />
      <ModalContent borderRadius={4}>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center" justify="center">
            <AuthContent
              as="form"
              errors={errors}
              onSubmit={handleSubmit((data) => onSubmit(data))}
              px={8}
              py={12}
              register={register}
              spacing={3}
              type={type}
              w="100%"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const withAuthModal = (Component) => (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const toast = useToast();

  const signUp = ({ email, pass }) => {
    auth
      .signup(email, pass)
      .then(() => {
        toast({
          title: 'Success! 🍻',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
        onClose();
      })
      .catch((error) => {
        toast({
          title: 'An error occurred.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      });
  };
  return (
    <>
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        type="Sign Up"
        onSubmit={signUp}
      />
      <Component openAuthModal={onOpen} {...props} />
    </>
  );
};

export const withSignInRedirect = (Component) => (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const signIn = ({ email, pass }) => {
    auth
      .signin(email, pass)
      .then(() => {
        router.push('/active');
      })
      .catch((error) => {
        toast({
          title: 'An error occurred.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      });
  };

  return (
    <>
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        type="Sign In"
        onSubmit={signIn}
      />
      <Component onSignIn={onOpen} {...props} />
    </>
  );
};

export default FullScreenAuth;
