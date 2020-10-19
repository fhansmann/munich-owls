/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Button,
  Textarea,
  FormHelperText
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';

const InputModal = ({ isOpen, onClose, onSubmit }) => {
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
              onSubmit={handleSubmit(onSubmit)}
              px={8}
              py={12}
              register={register}
              spacing={3}
              w="100%"
            >
              <FormControl isInvalid={errors.input && errors.input.message}>
                <FormLabel htmlFor="input">Please provide details:</FormLabel>
                <Textarea
                  autoFocus
                  aria-label="Input"
                  name="input"
                  ref={register({
                    required: 'Please enter details',
                    maxLength: 150
                  })}
                  placeholder="Example: Large pothole in the middle of the cyling path - watch out!"
                />
                <FormHelperText id="email-helper-text">
                  Max. 150 characters | Please use English
                </FormHelperText>
                <FormErrorMessage>
                  {errors.input && errors.input.message}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" mt={4} variantColor="teal" variant="solid">
                Submit
              </Button>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
