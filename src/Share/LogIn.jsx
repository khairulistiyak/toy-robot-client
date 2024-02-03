import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const { logInUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        naviGate(from);
      })
      .catch((error) => {
        // console.log(error.massage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <div className="mb-4">
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Email
          </motion.label>
          <motion.input
            type="email"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div className="mb-4">
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Password
          </motion.label>
          <motion.input
            type="password"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mb-5 text-white w-full font-bold bg-slate-700   me-5 menu  btn py-2 px-4 rounded-md hover:bg-neutral hover:text-white focus:outline-none focus:bg-slate-800 focus:text-slate-400"
        >
          Login
        </motion.button>

        <SocialLogin />

        <h1 className="text-center mt-2">
          Don't have an account?..
          <Link className="text-slate-900 w-full font-bold" to="/signUp">
            Sign Up
          </Link>
        </h1>
      </motion.form>
    </div>
  );
};

export default LogIn;
