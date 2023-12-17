import { data } from "autoprefixer";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const AllToyCard = ({ allToy }) => {
  console.log(allToy);
  const { photoUrl, models, name, _id } = allToy;

  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    fetch(`http://localhost:5000/allToy/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
  };

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
          <p
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 hover:bg-red-700 focus:bg-red-950 text-white"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllToyCard;
