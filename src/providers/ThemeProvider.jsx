import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config/Firebase.config";
import axios from "axios";

const GoogleProvider = new GoogleAuthProvider();

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);
      console.log("Observed User:", currentUser);

      if (currentUser) {
        axios
          .post(
            "https://swap-gardens-server.vercel.app/api/v1/auth/access-token",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("token res", res.data);
            if (res.data.success) {
              console.log(res.data.success);
            }
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const themeInfo = {
    googleSignIn,
    loading,
    signInUser,
    setLoading,
    user,
    logOut,
    createUser,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
