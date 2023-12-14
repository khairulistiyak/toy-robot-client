import React from "react";

const GalleryCard = ({ photo }) => {
  const { photoURL } = photo;
  return (
    <div>
      <div className="">
        <div className=" border-2 border-sky-200 w-full bg-base-100 shadow-xl lg:mx-0 md">
          <figure>
            <img
              src={photoURL}
              alt="Shoes "
              className="h-72 w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
