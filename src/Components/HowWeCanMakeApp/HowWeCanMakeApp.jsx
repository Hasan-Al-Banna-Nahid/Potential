import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { SiCodingame } from "react-icons/si";

const HowWeCanMakeApp = () => {
  return (
    <div className="p-6">
      <div>
        <img
          className="mx-auto rounded-lg w-[700px] h-[700px]"
          src="/Asset/2202757.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl shadow-xl text-blue-800">
          How We Can Make App/Web <br /> Faster Than Other Company
        </h2>
        <div className="md:flex justify-center items-center gap-6 mx-auto my-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <AiFillFolderOpen className="text-6xl  text-blue-800" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Documentation</h2>
              <p>
                Keep information from docs, wikis, and projects in one place —
                so all teams row in the same direction.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <GiElectric className="text-6xl text-violet-700" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Requirement Analysis</h2>
              <p>
                We Do Requirement Analysis in Software Engineering For Better
                Algorithm,Scalability,Performance etc...
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <SiCodingame className="text-6xl text-slate-900 " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Implement The Code Base With Bug Free Code
              </h2>
              <p>
                We Have Experienced Programmer with Easily Maintainable
                Code,Less Bug Free,Scalable,Performant Code With Better
                Algorithm And Latest Technology
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card3 */}
      </div>
    </div>
  );
};

export default HowWeCanMakeApp;
