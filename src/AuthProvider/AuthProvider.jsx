import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);

  // Google Authentication:
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github Authentication:
  const githubSignIn = (githubProvider) => {
    return signInWithPopup(auth, githubProvider);
  };

  // Create user with Email-Password:
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User observing:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // User sign-out:
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    googleSignIn,
    githubSignIn,
    createUser,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
