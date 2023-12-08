import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../config/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { nobin: "nobin" };
  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// import React, { createContext } from "react";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../config/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   // const createNewUser = (email, password) => {
//   //   return createUserWithEmailAndPassword(auth, email, password);
//   // };
//   const user = { name: "Minhaz" };

//   const authInfo = {
//     user,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;
