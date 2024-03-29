import React, { createContext, useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../config/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allToy, setAllToy] = useState([]);

  // darkMode start
  const [isDarkMode, setDarkMode] = useState(true);
  const [darkText, setDarkText] = useState("");

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      return setDarkText(
        <>
          <CiLight className="text-2xl text-yellow-500" />
        </>
      );
    } else {
      return setDarkText(
        <>
          <MdDarkMode className="text-2xl text-slate-950" />
        </>
      );
    }
  };

  // darkMode end

  useEffect(() => {
    const url = "http://localhost:5000/allToy";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          return setLoading(true);
        }
        setAllToy(data);
      });
  }, []);

  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log("current user", currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    signUp,
    logInUser,
    googleLogin,
    logOut,
    allToy,
    handleDarkMode,
    darkText,
    loading,
    setAllToy,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
