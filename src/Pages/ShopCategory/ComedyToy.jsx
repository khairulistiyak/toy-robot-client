import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";
import ToyDetail from "../ToyDetails/ToyDetails";

const ComedyToy = ({ items }) => {
  const { name, photoUrl, description, price, rating } = items;
  const descriptionSlice = description?.slice(0, 80);

  if (items.category == "Comedy Toy") {
    return (
      <div>
        <div className="card card-compact w-full bg-base-100 shadow-xl h-[30rem]">
          <figure>
            <img src={photoUrl} alt="Shoes" className="h-60 w-full object-cover" />
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
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <Link>
                <button className="btn" onClick={() => document.getElementById("my_modal_5").showModal()}>
                  open modal
                </button>
              </Link>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg"></h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ComedyToy;
