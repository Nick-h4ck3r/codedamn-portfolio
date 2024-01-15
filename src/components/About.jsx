import React from "react";

export default function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28">
      {/* page header */}
      <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      {/* your image */}
      <img
        src="/about.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-40 h-40 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
        alt="about image"
      />

      <div className="px-0 md:px-20 text-black ">
        {/* paragraph title/name */}
        <p className="text-3xl md:text-4xl font-semibold lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          About me
        </p>

        {/* a little information about your background */}
        <div className="text-sm md:text-base lg:text-lg font-light px-4 md:px-7 pt-3 font-outfit">
          <p>
            Welcome to my digital abode! <br />
          </p>
          <br />
          <p>
            I am a{" "}
            <span className="text-blue-500 font-semibold">
              full stack developer{" "}
            </span>
            with a passion for building scalable and user-friendly web
            applications. I love to create elegant solutions to complex
            problems.
          </p>
          <br />
          <p>
            Alongside my tech endeavors, I am an avid reader and enjoy delving
            into subjects such as psychology and philosophy while enjoying a{" "}
            <span className="text-blue-500 font-semibold">
              fresh cup of coffee!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
