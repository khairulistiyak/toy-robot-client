import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const Interactive = ({ items }) => {
  console.log(items);
  if (items.category == "Interactive Robots") {
    const { name, photoUrl, description, price, rating } = items;
    const descriptionSlice = description?.slice(0, 80);
    return (
      <>
        <div>
          <div className="card card-compact w-full bg-base-100 shadow-xl h-[30rem]">
            <figure>
              <img
                src={photoUrl}
                alt="Shoes"
                className="h-60 w-full object-cover"
              />
            </figure>
            <div className="card-body gap-0">
              <h2 className="card-title">{name}</h2>
              <p className=" text-slate-600"> {descriptionSlice}..</p>
              <p
                className="text-sm
           text-slate-600"
              >
                Price : {price}
              </p>

              <div className=" flex  gap-3 w-20">
                <Rating value={items?.rating} readOnly />
                {rating}
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Interactive;
