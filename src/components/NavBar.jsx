import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../src/assets/img/logo.png";
import NavMenus from "./NavMenus";
import { AuthContext } from "../Provider/AuthProvider";
import NavBarMobile from "./NavBarMobile";

const Avatar = () => {
  const { user } = useContext(AuthContext);

  const displayName = user?.displayName;

  return (
    <>
      {user ? (
        <>
          <motion.div whileHover={{ scale: 1.1 }} className="avatar">
            <div className="w-14 me-10 rounded-full ring ring-slate-300 ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} title={displayName ? `Hello, ${displayName}!` : "User"} alt="Avatar" />
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const NavBar = ({ handleDarkMode, darkText }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ">
            <NavBarMobile></NavBarMobile>
          </ul>
        </div>
        <img className=" mx-5 w-20 hidden md:block xl:block 2xl:block lg:block" src={logo} alt="" />

        <a className="btn btn-ghost text-xl">Toy Robot</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavMenus></NavMenus>
        </ul>
      </div>
      {/* <p>{user.email}</p> */}
      <div className="navbar bg-base-100 navbar-end">
        <Avatar />

        <div>
          {user ? (
            <></>
          ) : (
            <>
              <NavLink
                to="/signUp"
                className=" me-5 menu  btn py-2 px-4 rounded-md hover:bg-neutral hover:text-white focus:outline-none focus:bg-slate-800 focus:text-slate-400 "
              >
                SignUp
              </NavLink>
              <NavLink
                to="/logIn"
                className=" menu  btn py-2 px-4 rounded-md hover:bg-neutral hover:text-white focus:outline-none focus:bg-slate-800 focus:text-slate-400"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
