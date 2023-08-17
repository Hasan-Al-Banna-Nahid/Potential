import React from "react";

const Banner = () => {
  return (
    <div className="shadow-2xl md:p-4">
      <div className="card md:w-full md:h-[800px] bg-base-300 shadow-xl image-full">
        <figure>
          <img src="/Asset/971.jpg" alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body md:flex justify-center items-center">
          <h2 className="text-6xl font-bold text-white text-center p-4 mt-8">
            The Fastest Company <br /> Making Software In Korea
          </h2>
          <p className="text-blue-800 text-center font-semibold text-2xl">
            One tool for your entire team to share knowledge, ship projects, and
            collaborate.
          </p>
          <div className="md:w-96 mx-auto my-6 shadow-xl">
            <button className="btn btn-outline btn-warning font-bold md:mx-auto md:w-96">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
