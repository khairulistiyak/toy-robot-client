import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/img/logo.png";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const NavMenus = () => {
  const { user } = useContext(AuthContext);
  const menus = (
    <>
      <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <NavLink to="/">Home</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <NavLink to="/allToys">All Toys</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <NavLink to="/blogs">Blogs</NavLink>
      </motion.li>
      {user ? (
        <>
          <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <NavLink to="/addToy">Add A Toy</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <NavLink to="/myToys">My Toys</NavLink>
          </motion.li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return <>{menus}</>;
};

export default NavMenus;
