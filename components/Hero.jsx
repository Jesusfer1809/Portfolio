import React from "react";

function Hero() {
  return (
    <div className="h-screen flex flex-col  justify-center p-8">
      <div className=" w-full lg:w-4/5 xl:w-3/5 ">
        <span className="text-gray_project tracking-[7px] text-xs sm:text-sm">
          JESUS RONDON
        </span>

        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2">
          Front-end web developer{" "}
        </h1>

        <p className="block text-gray_project text-base sm:text-lg md:text-[1.375rem] font-medium mt-8 leading-relaxed">
          Totally self-taught. I'm a junior web developer with a passion for
          technology and always learning new features. Let's work together and
          make amazing webs that your users will love!
        </p>

        <div className="flex items-center space-x-4 sm:space-x-8 mt-8">
          <span className="font-semibold text-base sm:text-lg md:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300">
            View my projects
          </span>{" "}
          <span className="font-medium text-gray_project text-sm sm:text-base">
            or
          </span>{" "}
          <span className="font-semibold text-base sm:text-lg md:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300">
            Read about me
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
