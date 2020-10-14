/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useToast } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';
import FullScreenAuth from '../components/AuthSignIn';

export default () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const signIn = ({ email, pass }) => {
    auth
      .signin(email, pass)
      .then(() => {
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
      <FullScreenAuth type="Sign In" onSubmit={signIn} />;
    </div>
  );
};
