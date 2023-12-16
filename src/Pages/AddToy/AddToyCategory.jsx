import React, { useState } from "react";

const AddToyCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(selectedCategory);

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    setSelectedCategory(category);
  };
  return (
    <div className="dropdown">
      {/* selected category   */}
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
            <a onClick={() => handleCategoryClick("Interactive Robots")}>
              Interactive
            </a>
          </li>
          <li>
            <a onClick={() => handleCategoryClick("Comedy Toy")}>Comedy</a>
          </li>
          <li>
            <a onClick={() => handleCategoryClick("Educational Robots")}>
              Educational
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AddToyCategory;
