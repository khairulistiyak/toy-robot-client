import React from "react";

const Header = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full h-[80vh] rounded-md overflow-hidden shadow-md"
      >
        <img
          src="https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-full object-cover"
          alt="Carousel Image"
        />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle text-slate-900">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle text-slate-900">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative h-[80vh] w-full">
        <img
          src="https://images.pexels.com/photos/8294598/pexels-photo-8294598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[80vh]">
        <img
          src="https://images.pexels.com/photos/8294826/pexels-photo-8294826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[80vh]">
        <img
          src="https://images.pexels.com/photos/8294816/pexels-photo-8294816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
