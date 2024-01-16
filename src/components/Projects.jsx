import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import data from "../../data/data.json";

export default function Projects() {
  const swiperRef = useRef;

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((project, i) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen mt-10 md:mt-28"
              >
                {/* image for the project */}
                <img
                  className="w-[300px] md:w-[400px] rounded-t-md object-contain cursor-grab"
                  src={project.imgurl}
                />

                <div className="px-8 w-[300px] md:w-[400px] py-7 font-outfit shadow-lg bg-slate-100/20 backdrop-blur-sm md:text-left rounded-b-md space-y-4 cursor-grab">
                  {/* image for the project */}
                  <h4 className="text-xl font-semibold md:text-2xl text-black">
                    {project.title}
                  </h4>

                  {/* description of the project */}
                  <p className="text-sm font-normal md:text-base mt-3 text-gray-800 ">
                    {project.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[27%] bg-gradient-to-r from-blue-500 opacity-70 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
