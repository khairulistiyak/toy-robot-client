import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyCard from "./AllToyCard";
import { AuthContext } from "../Provider/AuthProvider";

const AllToys = () => {
  // const [allToys, setAllToys] = useState(loadedToys);
  const { allToy, setAllToy } = useContext(AuthContext);

  console.log(allToy);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Seller Name</th>
            </tr>
          </thead>
          <tbody>
            {allToy?.map((item, index) => (
              <AllToyCard index={index} key={item._id} item={item} setAllToy={setAllToy}></AllToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
