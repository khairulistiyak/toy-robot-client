import React, { useEffect } from "react";
import Swal from "sweetalert2";

const AllToyCard = ({ allToy, allToys, setLoadedToys }) => {
  console.log(allToy);
  const { photoUrl, models, name, _id } = allToy;

  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
              const remaining = allToys.filter((toys) => toys._id !== _id);
              setLoadedToys(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Models : {models} </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">{allToy?.displayName}</button>
        </th>
      </tr>
    </>
  );
};

export default AllToyCard;
