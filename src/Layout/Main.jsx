import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [darkText, setDarkText] = useState(<CiLight className="text-2xl text-yellow-500" />);

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

  return (
    <>
      <div className={`${isDarkMode ? "" : "bg-slate-900"}`}>
        <div>
          <NavBar handleDarkMode={handleDarkMode} darkText={darkText}></NavBar>
        </div>
        <div className=" md:container lg:Container xl:container 2xl:container max-auto px-10 w-full mx-auto">
          <Outlet></Outlet>
        </div>
        <div>
          <Footers></Footers>
        </div>
      </div>
    </>
  );
};

export default Main;
