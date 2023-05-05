import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  console.log(user);

  // Google Authentication:
  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Authentication:
  const githubSignIn = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Email-Pass Login:
  const emailPassLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create user with Email-Password:
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User observing:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // User sign-out:
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Forgot password:
  // const resetPassword = (email) => {
  //   return sendPasswordResetEmail(auth, email);
  // };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    githubSignIn,
    emailPassLogIn,
    createUser,
    logOut,
    // resetPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
