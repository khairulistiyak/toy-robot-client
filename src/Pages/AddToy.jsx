import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddToy = () => {
  const { allToy, user } = useContext(AuthContext);
  console.log(user);
  console.log(allToy);

  return (
    <div>
      <form className="card-body">
        <p className="font-bold"> </p>

        <div className="grid grid-cols-2 gap-x-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered"
              name="title"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button "
                className="btn m-1 bg-slate-700 text-white uppercase mt-5"
              >
                Items
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
