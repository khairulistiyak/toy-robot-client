import React from "react";

const AllToyCard = ({ allToy }) => {
  console.log(allToy.category);
  const { photoUrl, models, name } = allToy;
  return (
    <div className="card w-52 bg-base-100 shadow-xl">
      <figure>
        <img className="object-cover h-32" src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>
          <strong>Model: </strong>
          {models}
        </p>
        <div className="card-actions justify-end">
          <p className="btn bg-slate-700 hover:bg-slate-800 focus:bg-slate-950  text-white">
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllToyCard;
