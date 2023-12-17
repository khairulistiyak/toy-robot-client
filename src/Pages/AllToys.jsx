import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);

  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-4 justify-center">
        {allToys.map((allToy) => (
          <AllToyCard key={allToy._id} allToy={allToy}></AllToyCard>
        ))}
      </div>
    </>
  );
};

export default AllToys;
