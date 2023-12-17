import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { allToy, user } = useContext(AuthContext);
  // console.log(user);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    setSelectedCategory(category);
  };

  const handleRatingClick = (rating) => {
    setIsOpen(false);
    setSelectedRating(rating);
  };

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = selectedCategory;
    const rating = selectedRating;
    const name = form.name.value;
    const description = form.description.value;
    const chipset = form.chipset.value;
    const models = form.models.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;
    const displayName = user?.displayName;
    const addToys = {
      category,
      rating,
      name,
      description,
      chipset,
      models,
      email,
      photoUrl,
      displayName,
      price,
    };
    console.log(addToys);
    const url = `http://localhost:5000/allToy`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  // chipset , models , rating, sensors, weight, colors

  return (
    <div>
      <form onSubmit={handleAddToy} className="card-body">
        <p className="font-bold"> </p>

        <div className="grid lg:grid-cols-2 gap-x-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered "
              name="name"
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chipset</span>
            </label>
            <input
              type="text"
              placeholder="Chipset"
              name="chipset"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Model</span>
            </label>
            <input
              type="text"
              placeholder="Model"
              name="models"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              name="photoUrl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 ">
            {/* selected category   */}
            <div className="dropdown">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <div
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                role="button"
                className="btn m-1"
                name="category"
              >
                {selectedCategory === "" ? "Category" : selectedCategory}
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      onClick={() => handleCategoryClick("Interactive Robots")}
                    >
                      Interactive
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick("Comedy Toy")}>
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("Educational Robots")}
                    >
                      Educational
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="dropdown">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <div
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                role="button"
                className="btn m-1"
              >
                {selectedRating === 0 ? "Rating" : selectedRating}
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  name="rating"
                >
                  <li>
                    <a onClick={() => handleRatingClick(3.5)}>3.5</a>
                  </li>
                  <li>
                    <a onClick={() => handleRatingClick(4)}>4</a>
                  </li>
                  <li>
                    <a onClick={() => handleRatingClick(4.5)}>4.5</a>
                    <a onClick={() => handleRatingClick(5)}>5</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              name="email"
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
