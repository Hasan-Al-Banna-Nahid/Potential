import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-center text-blue-800 text-4xl font-bold my-6">
        Our Portfolio
      </h2>
      <div className="grid md:grid-cols-3 gap-6 shadow-inner">
        {/* Card 2 */}
        <div className="card md:w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/toy1.png" />
            </div>
            <div>
              <img src="/toy2.png" />
            </div>
            <div>
              <img src="/toy3.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Toy Man</h2>
            <li className="font-bold text-slate-800">
              This Is a Toy Selling Site
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://toy-man.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://toyman.vercel.app/" target="_blank">
                  Live Site(Server)
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-React-Firebase-Express-Mongo"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-ServerSide"
                  target="_blank"
                >
                  Source Code Server Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        {/* Card 3 */}
        <div className="card md:w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/v1.png" />
            </div>
            <div>
              <img src="/v2.png" />
            </div>
            <div>
              <img src="/v3.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Vedhak</h2>
            <li className="font-bold text-slate-800">
              This is Summer camp activities Site
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://summer-camp-f4fcb.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp-Server"
                  target="_blank"
                >
                  Source Code Server Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}

        {/* Card 4 */}
        <div className="card md:w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/emphires/1 (1).png" />
            </div>
            <div>
              <img src="/emphires/1 (2).png" />
            </div>
            <div>
              <img src="/emphires/1 (3).png" />
            </div>
            <div>
              <img src="/emphires/1 (4).png" />
            </div>
            <div>
              <img src="/emphires/1 (5).png" />
            </div>
            <div>
              <img src="/emphires/1 (6).png" />
            </div>
            <div>
              <img src="/emphires/1 (7).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Emphires</h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://emphires-1fd59.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Emphires"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}

        {/* Card 5 */}
        {/* <div className="card w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/Recruitment/1 (1).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (2).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (3).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (4).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">
              Recruitment Agency
            </h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is A Landing page And a candidates search Functionality
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://recruitment-ce371.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Recruitment"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div> */}
        {/* Card 5 */}

        {/* Card 6*/}
        {/* <div className="card w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/Job Board/1 (1).png" />
            </div>
            <div>
              <img src="/Job Board/1 (2).png" />
            </div>
            <div>
              <img src="/Job Board/1 (3).png" />
            </div>
            <div>
              <img src="/Job Board/1 (4).png" />
            </div>
            <div>
              <img src="/Job Board/1 (5).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Job Board</h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is A Landing page And a candidates search Functionality
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://job-board-dd1b3.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Job-board"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div> */}
        {/* Card 6*/}
        {/* Card 7 */}
        {/* <div className="card w-[500px] bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031920.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031933.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031945.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031957.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032008.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032031.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032041.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032053.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032209.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Belletrist</h2>
            <li className="font-bold text-slate-800">
              This is a Script Writing Site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is ChatGPT integration for Chat Completion
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://belletrist-8e1fe.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Belletrist"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div> */}
        {/* Card 7 */}
      </div>
    </div>
  );
};

export default Portfolio;
