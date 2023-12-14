import React from "react";
import Header from "./Header";
import Gallery from "./Gallery/Gallery";
import ShopCategory from "./ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
    </div>
  );
};

export default Home;
