import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

const AllToyCard = ({ item, setAllToy, index }) => {
  const { _id } = item;
  const [toyDetails, setToyDetails] = useState([]);
  console.log(toyDetails);

  // const handleShowDetails = () => {};

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
              // const remaining = item.filter((toys) => toys._id !== _id);
              // setAllToy(remaining);
              setAllToy((prevToys) => prevToys.filter((toy) => toy._id !== _id));
            }
          });
      }
    });
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
                <img src={item?.photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">
                <Link to={`/allToy/${item._id}`}>{item?.name}</Link>
              </div>
              <div className="text-sm opacity-50">Models : {item?.models} </div>
            </div>
          </div>
        </td>
        <td>{item?.category}</td>
        <td>${item?.price}</td>
        <th>
          <p>{item?.displayName}</p>
        </th>
        <th>
          <button className="btn" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </th>
        <th>
          <button className="btn">details</button>
        </th>
        <th>{/* Open the modal using document.getElementById('ID').showModal() method */}</th>
      </tr>
    </>
  );
};

export default AllToyCard;
