import React from "react";
import {
  GiArtificialIntelligence,
  GiOffshorePlatform,
  GiSpiderWeb,
} from "react-icons/gi";
import { BsApple } from "react-icons/bs";

const Service = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-blue-800 my-6 text-center">
        Service We Provide
      </h2>
      <div className="md:flex justify-center items-center gap-6">
        <div className="md:grid md:grid-cols-2 gap-4 p-4">
          {/* Card 1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <GiArtificialIntelligence className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">AI!</h2>
              <p>We Work With Artificial Intelligence And Machine Learning</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          {/* Card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <BsApple className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">App!</h2>
              <p>We Work With Mobile & Desktop App</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          {/* Card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <GiOffshorePlatform className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Platform!</h2>
              <p>We Work With Platform App</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          {/* Card 4 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <GiSpiderWeb className="text-6xl text-blue-950" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Landing Page!</h2>
              <p>We Work With Beautiful Landing Page</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          {/* Card 4 */}
        </div>
        <div>
          <img
            className="rounded-lg w-[800px] h-[800px]"
            src="/Asset/5970189.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
