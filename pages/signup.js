/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useToast } from '@chakra-ui/core';
import { useAuth } from '../lib/auth';
import FullScreenAuth from '../components/AuthSignUp';
import { useRouter } from 'next/router';

export default () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

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
        router.push('/map');
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
    <div className="background">
      <FullScreenAuth type="Sign Up" onSubmit={signUp} />;
    </div>
  );
};
