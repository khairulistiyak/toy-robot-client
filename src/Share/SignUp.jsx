import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { TiWarning } from "react-icons/ti";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// ... (other imports)

const SignUp = () => {
  const { user, signUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (event) => {
    setSuccess("");
    setError("");
    event.preventDefault();

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        console.log(result.user);

        if (result.user.uid) {
          setSuccess(
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex  gap-3 items-center"
              >
                <IoMdCheckmarkCircleOutline className="text-xl text-green-600" />
                <small className="text-green-600">
                  Successfully registered your account
                </small>
              </motion.div>
            </>
          );
        }
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setError(
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex gap-2"
              >
                <TiWarning className="text-xl text-yellow-500" />
                <small>This email is already in use</small>
              </motion.div>
            </>
          );
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSignUp}
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Enter your name"
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
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Enter your email"
            name="email"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Enter your password"
            name="password"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mb-5 text-white w-full font-bold bg-slate-700   me-5 menu  btn py-2 px-4 rounded-md hover:bg-neutral hover:text-white focus:outline-none focus:bg-slate-800 focus:text-slate-400"
        >
          Sign Up
        </motion.button>
        <p className="font-bold">{error}</p>
        <p className="font-bold">{success}</p>

        <SocialLogin></SocialLogin>
        <h1 className="text-center mt-2">
          Already have an account?..
          <Link className="text-slate-900 font-bold" to="/logIn">
            Login
          </Link>
        </h1>
      </motion.form>
    </div>
  );
};

export default SignUp;
