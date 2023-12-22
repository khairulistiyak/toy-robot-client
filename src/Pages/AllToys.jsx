import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadedToys);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToyCard key={allToy._id} allToy={allToy} allToys={allToys} setLoadedToys={setAllToys}></AllToyCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default AllToys;
