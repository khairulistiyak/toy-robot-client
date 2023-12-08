import React, { useState } from "react";

import { motion } from "framer-motion";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            name="name"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className=" bg-orange-500 w-full text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-900"
        >
          Login
        </motion.button>
        <SocialLogin></SocialLogin>
        <h1 className="text-center mt-5">
          Have an account?..
          <Link className="text-orange-600 w-full font-bold" to="/signUp">
            SignUp
          </Link>
        </h1>
      </motion.form>
    </div>
  );
};

export default LogIn;
