import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";

const Main = () => {
  return (
    <div className="mx-auto  2xl:container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div>
        <Footers></Footers>
      </div>
    </div>
  );
};

export default Main;
