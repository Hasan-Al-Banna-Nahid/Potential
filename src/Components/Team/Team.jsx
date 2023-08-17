import React from "react";
import LazyLoad from "react-lazyload";

const Team = () => {
  return (
    <div>
      <h2 className="text-4xl text-center text-blue-800 font-bold my-6">
        Meet Our Expert Team
      </h2>
      <div className="grid md:grid-cols-3 gap-6 w-[1200px] mx-auto p-4 my-4">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Hasan</h2>
              <p>Backend Engineer</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person6.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Banna!</h2>
              <p>Full Stack Developer</p>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person2.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Nahid</h2>
              <p>Machine Learning Engineer</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person3.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Babu</h2>
              <p>AI Engineer</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person4.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Alice</h2>
              <p>Business Analyser</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                {" "}
                <img
                  src="/Asset/person5.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Johnson</h2>
              <p>Software Engineer</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
