/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
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
  useToast
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';

const Modal = ({ isOpen, onClose, register, errors, type }) => {
  const auth = useAuth();
  const { handleSubmit, register, errors } = useForm();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="400px">
      <ModalOverlay />
      <ModalContent borderRadius={4}>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center" justify="center">
            <Stack
              as="form"
              errors={errors}
              onSubmit={handleSubmit((data) => onSubmit(data))}
              px={8}
              py={12}
              register={register}
              spacing={3}
              type={type}
              w="100%"
            >
              <FormControl isInvalid={errors.input && errors.input.message}>
                <FormLabel>
                  Please provide details (max. 150 characters):
                </FormLabel>
                <Input
                  autoFocus
                  aria-label="Input"
                  name="input"
                  ref={register({
                    required: 'Please enter details'
                  })}
                  placeholder="Large pothole at the intersection of street and cyling path - watch out!"
                />
                <FormErrorMessage>
                  {errors.input && errors.input.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
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

export default withAuthModal;
