import React from "react";
import { BiTimer, BiGroup } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";

const Comparison = () => {
  return (
    <div>
      <h2 className="text-center text-4xl text-blue-800 my-6 font-bold">
        What Is The Difference Between Us <br /> And Other Software Company
      </h2>
      <div className="md:flex gap-6 justify-center items-center p-6">
        <div>
          <img
            className="w-[600px] h-[600px] rounded"
            src="/undraw_feeling_proud_qne1.png"
            alt=""
          />
        </div>
        <div className="md:grid md:grid-cols-2 justify-center items-center gap-12 my-4 mx-auto">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <BiTimer className="text-6xl text-blue-900" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Time Taken!</h2>
              <p>We Deliver Our Product At Time Of Requirement</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <BsCurrencyDollar className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cost!</h2>
              <p>We Provide Our Service At Smart Cost</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <BiGroup className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Team!</h2>
              <p>We Have Expertize Programmer Team</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
