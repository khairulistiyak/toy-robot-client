import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import { data } from "autoprefixer";

const Gallery = () => {
  const [photoGallery, setPhotoGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/photoGallery")
      .then((res) => res.json())
      .then((data) => setPhotoGallery(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl uppercase font-bold mt-10  text-center">
        Gallery
      </h1>

      <p className=" text-center mb-10 mt-5">
        Embark on a visual journey through the captivating world of Toy Robot!{" "}
        <br />
        Our gallery is a kaleidoscope of joy.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        {photoGallery.map((photo) => (
          <GalleryCard key={photo._id} photo={photo}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
