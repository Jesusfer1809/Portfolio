import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="px-8 pb-20">
      <div>
        <span className="text-sm text-gray_project tracking-widest">
          SEE MY LATEST JOB
        </span>
        <h2 className="text-5xl font-bold">Main Projects</h2>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20 mt-16">
        <div className=" grid grid-cols-1 w-full    ">
          <div>
            <img src="/spotify_project.jpg" alt="" className="h-full" />
          </div>
          <div className="  bg-white h-full p-4 border-b-[1px]  border-project  ">
            <h3 className=" text-2xl lg:text-3xl font-semibold">
              Spotify Clone
            </h3>

            <p className="font-medium block mt-4">
              Spotify App made with NextJs. It has a remote connection with your
              local Spotify app, by using Next Auth and Spotify API{" "}
            </p>

            <div className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-8  xl:items-end mt-8">
              <Link href="https://spotify-clone-three-rho.vercel.app">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  Visit the page &rarr;
                </a>
              </Link>

              <span className="font-semibold  text-gray_project ">or</span>

              <Link href="https://github.com/Jesusfer1809/Spotify_clone">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  See the code on Github &rarr;
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 w-full    ">
          <div>
            <img src="/netflix_project.jpg" alt="" />
          </div>
          <div className="  bg-white h-full p-4 border-b-[1px]  border-project  ">
            <h3 className="text-2xl lg:text-3xl font-semibold">
              Netflix Clone
            </h3>

            <p className="font-medium block mt-4">
              A Netflix page, made with NextJs. With Firebase authentication and
              connected with TMBD API{" "}
            </p>

            <div className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-8  xl:items-end mt-8">
              <Link href="https://netflix-clone-beta-pearl.vercel.app">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  Visit the page &rarr;
                </a>
              </Link>

              <span className="font-semibold  text-gray_project ">or</span>

              <Link href="https://github.com/Jesusfer1809/Netflix_clone">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  See the code on Github &rarr;
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 w-full    ">
          <div>
            <img src="/amazon_project.jpg" alt="" />
          </div>
          <div className="  bg-white h-full p-4 border-b-[1px]  border-project  -mt-1 ">
            <h3 className="text-2xl lg:text-3xl font-semibold">Amazon Clone</h3>

            <p className="font-medium block mt-4">
              The Amazon E-Commerce website. With Next Auth authentication and
              Stripe for the payments{" "}
            </p>

            <div className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-8  xl:items-end mt-8">
              <Link href="https://amazon-clone-seven-beta.vercel.app">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  Visit the page &rarr;
                </a>
              </Link>

              <span className="font-semibold  text-gray_project ">or</span>

              <Link href="https://github.com/Jesusfer1809/Amazon_clone">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  See the code on Github &rarr;
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 w-full    ">
          <div>
            <img src="/omnifood_project.jpg" alt="" />
          </div>
          <div className="  bg-white h-full p-4 border-b-[1px]  border-project  ">
            <h3 className="text-2xl lg:text-3xl font-semibold">
              Omnifood project
            </h3>

            <p className="font-medium block mt-4">
              A pure frontend clone for the Omnifood website of Jonas
              Schmedtmann course. It was usefull to improve my Tailwind and
              NextJs skills.
            </p>

            <div className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-8  xl:items-end mt-8">
              <Link href="https://omnifood-snowy.vercel.app/">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  Visit the page &rarr;
                </a>
              </Link>

              <span className="font-semibold  text-gray_project ">or</span>

              <Link href="https://github.com/Jesusfer1809/Omnifood">
                <a
                  target="_blank"
                  className="font-semibold self-start xl:self-end text-base sm:text-lg lg:text-xl border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
                >
                  See the code on Github &rarr;
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
