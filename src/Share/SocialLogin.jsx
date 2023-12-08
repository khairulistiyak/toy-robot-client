import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialLogin = () => {
  const iconVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <div className="grid justify-center mt-2">
      <h1 className="text-center font-bold text-orange-400 mb-3">
        Or Sign Up with
      </h1>
      <ul className="menu menu-horizontal gap-10">
        <li>
          <Link>
            <motion.div whileHover="hover" variants={iconVariants}>
              <FcGoogle className="text-2xl" />
            </motion.div>
          </Link>
        </li>
        <li>
          <Link>
            <motion.div whileHover="hover" variants={iconVariants}>
              <FaGithub className="text-2xl" />
            </motion.div>
          </Link>
        </li>
        <li>
          <Link>
            <motion.div whileHover="hover" variants={iconVariants}>
              <FaFacebook className="text-2xl text-blue-600" />
            </motion.div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLogin;
