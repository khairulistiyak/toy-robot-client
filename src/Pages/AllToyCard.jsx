import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import ToyDetail from "./ToyDetails/ToyDetails";

const AllToyCard = ({ item, setLoadedToys, index }) => {
  const { price, photoUrl, models, name, category, _id } = item;

  const [toy, setToy] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${_id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  // sweet alert delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToy/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())

          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = item.filter((toys) => toys._id !== _id);
              setLoadedToys(remaining);
            }
          });
      }
    });
  };

  const handleDetails = (item) => {
    console.log(item);
  };

  return (
    <>
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">
                <Link to={`/allToy/${_id}`}>{name}</Link>
              </div>
              <div className="text-sm opacity-50">Models : {models} </div>
            </div>
          </div>
        </td>
        <td>{category}</td>
        <td>${price}</td>
        <th>
          <p>{item?.displayName}</p>
        </th>
        <th>
          <button className="btn" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </th>
        <th>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div onClick={() => handleDetails(_id)}>
            <Link to={`/allToy/${item._id}`}>
              <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
                open modal
              </button>
            </Link>
            <ToyDetail></ToyDetail>
          </div>
        </th>
      </tr>
    </>
  );
};

export default AllToyCard;
