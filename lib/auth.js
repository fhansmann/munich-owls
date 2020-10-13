import { useState, useEffect, useContext, createContext } from 'react';
import 'firebase/auth';
import cookie from 'js-cookie';

import firebase from './firebase';
import Router from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      setUser(user);

      /*       cookie.set('munich-owls', true, {
        expires: 3
      }); */

      return user;
    } else {
      setUser(false);
      /*       cookie.remove('munich-owls'); */
      return false;
    }
  };

  const signinWithGoogle = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
        return response.user;
      });
  };

  const signinWithTwitter = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
        return response.user;
      });
  };

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        return response.user;
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signinWithGoogle,
    signinWithTwitter
  };
}
