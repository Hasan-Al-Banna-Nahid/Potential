import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaArrowUp } from "react-icons/fa";

import "swiper/css/bundle";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div className="md:text-center my-6 md:w-[1200px] mx-auto">
        <h2 className="text-4xl text-blue-800 font-bold my-4">
          What Our Client Say
        </h2>
        <p className="text-xl my-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve{" "}
          <br />
          ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>

      <div className="mx-auto md:w-[1200px]">
        <Swiper
          navigation={true}
          autoplay
          loop
          modules={[Navigation, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} className="md:my-12 md:container ">
                <div>
                  <div className="md:flex justify-center items-center gap-6">
                    <div>
                      <img
                        width={200}
                        height={200}
                        className="rounded-[100%]"
                        src={item.image}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <h2 className="text-xl">{item.profession}</h2>
                    </div>
                    <div>
                      <FaQuoteLeft className="text-3xl text-orange-600 sm:me-4" />
                    </div>
                  </div>
                  <p className="font-bold text-center my-4">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the <br />
                    1500s, when an unknow printer tool a galley of type and
                    scrambled it to <br />
                    make type specimen book has survived not only five
                    centurines.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
