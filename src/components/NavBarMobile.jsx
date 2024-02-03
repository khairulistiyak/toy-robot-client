import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/img/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const NavBarMobile = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then().catch();
  };
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
          <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <NavLink
              onClick={handleLogout}
              to="/logIn"
              className="me-5 menu ps-3 pe-5 btn py-2  rounded-md hover:bg-neutral hover:text-white focus:outline-none focus:bg-slate-800 focus:text-slate-400 "
            >
              <IoIosLogOut></IoIosLogOut> LogOut
            </NavLink>
          </motion.li>
        </>
      ) : (
        <>
          <motion.li whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <NavLink to="/Login">Login</NavLink>
          </motion.li>
        </>
      )}
    </>
  );
  return <>{menus}</>;
};

export default NavBarMobile;
