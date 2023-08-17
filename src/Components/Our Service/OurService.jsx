import React from "react";
import { BsApple } from "react-icons/bs";
import {
  GiArtificialIntelligence,
  GiCctvCamera,
  GiOffshorePlatform,
  GiSpiderWeb,
  GiWebSpit,
} from "react-icons/gi";
import Header from "../Header/Header";
import { SiGoogleanalytics, SiWebassembly } from "react-icons/si";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiBraille } from "react-icons/bi";

const OurService = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 className="text-4xl font-bold text-blue-800 my-6 text-center">
          Service We Provide
        </h2>
        <div className="md:flex justify-center items-center gap-6">
          <div className="md:grid md:grid-cols-3 gap-4 p-4">
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
            {/* Card 5 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <SiWebassembly className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Web Application!</h2>
                <p>We Work With Beautiful Web Application</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            {/* Card 6 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <AiOutlineAreaChart className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Business Chatbot!</h2>
                <p>We Work With Business Chatbot For Better Support</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            {/* Card 7 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <SiWebassembly className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Web Platform!</h2>
                <p>We Work With Various Web Platform</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            {/* Card 8 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <BiBraille className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">AI Tools!</h2>
                <p>We Work With AI based Human Body Analysis</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            {/* Card 9 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <GiCctvCamera className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Embedded System!</h2>
                <p>We Work With Embedded System Like CCTV Monitoring System</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 9 */}
            {/* Card 10 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <SiGoogleanalytics className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Machine Learning System!</h2>
                <p>
                  We Work With Machine Learning Tools Including Data Labelling
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 10 */}
            {/* Card 11 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <GiArtificialIntelligence className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Machine Learning System & AI!</h2>
                <p>
                  We Work With Machine Learning Tools & AI For Computer Vision &
                  Micro Service AI Tools
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 11 */}
            {/* Card 12 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <GiWebSpit className="text-6xl text-blue-950" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Business Tools!</h2>
                <p>We Work With Viral Marketing Page</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Card 12 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
