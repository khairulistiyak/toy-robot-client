import React, { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Interactive from "./Interactive";
import ComedyToy from "./ComedyToy";
import Educational from "./Educational";
import { AuthContext } from "../../Provider/AuthProvider";

const ShopCategory = () => {
  const { allToy } = useContext(AuthContext);

  return (
    <div className="my-20">
      <h1 className="text-3xl text-center uppercase font-bold mt-20">
        Shop Category
      </h1>

      <div className="grid w-full justify-center">
        <p className="text-center w-96 mt-5 mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ab
          beatae! Eos nobis consectetur id.
        </p>
      </div>
      <Tabs>
        <TabList role="tablist" className="tabs tabs-lifted rounded-xl ">
          <Tab
            role="tab"
            className="tab bg-slate-200 font-bold hover:bg-slate-700 hover:text-slate-100 focus:bg-slate-950 focus:text-slate-400"
          >
            Interactive
          </Tab>
          <Tab
            role="tab"
            className="tab bg-slate-200 font-bold hover:bg-slate-700 hover:text-slate-100 focus:bg-slate-950 focus:text-slate-400 "
          >
            Comedy Toy
          </Tab>

          <Tab
            role="tab"
            className="tab bg-slate-200 font-bold hover:bg-slate-700 hover:text-slate-100 focus:bg-slate-950 focus:text-slate-400"
          >
            Educational
          </Tab>
        </TabList>

        <TabPanel className="grid lg:grid-cols-4 md:grid-cols-2 mt-5 gap-5 ">
          {allToy.map((items) => (
            <Interactive key={items._id} items={items}></Interactive>
          ))}
        </TabPanel>
        <TabPanel className="grid lg:grid-cols-4  md:grid-cols-2 mt-5 gap-10">
          {allToy.map((items) => (
            <ComedyToy key={items._id} items={items}></ComedyToy>
          ))}
        </TabPanel>
        <TabPanel className="grid lg:grid-cols-4  md:grid-cols-2 mt-5 gap-10">
          {allToy.map((items) => (
            <Educational key={items._id} items={items}></Educational>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
