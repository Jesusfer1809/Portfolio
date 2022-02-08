import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-4 sm:p-8 mt-16">
      <div className="md:col-span-2 lg:w-3/5">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl block">
          Contact information
        </h3>
        <p className="block text-gray_project mt-3 font-medium lg:text-lg">
          Feel free to reach out to me any time. I prefer to talk over email,
          since I'm very active there.
        </p>
        <div className="flex flex-col sm:text-lg font-medium mt-6 space-y-1">
          <div className="flex space-x-4">
            <span className="text-gray_project">Email:</span>{" "}
            <span>jesusf.rondon1809@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-gray_project">Phone:</span>{" "}
            <span>+51-992-435-526</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg sm:text-xl block md:text-2xl">
          Current availability
        </h3>
        <p className="block text-gray_project mt-3 font-medium lg:text-lg">
          I'll be always happy to help you with your projects. If you have any
          website idea, just drop me a line.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl block">
          Follow me on -
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-4 text-lg font-medium mt-4 sz400:w-3/5 md:w-full">
          <div>
            <Link href="https://www.linkedin.com/in/jesus-rondon-963b1321a/">
              <a
                target="_blank"
                className="inline-block border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
              >
                . LinkedIn
              </a>
            </Link>
          </div>

          <div>
            <Link href="https://github.com/Jesusfer1809">
              <a
                target="_blank"
                className="inline-block border-b-2 border-transparent hover:border-project cursor-pointer transition-all duration-300"
              >
                . GitHub
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className=" text-gray_project font-medium">
        <p>&copy; Jesus Rondon.</p>
        <p>Made with 🖤 in Lima, Peru</p>
      </div>
    </div>
  );
}

export default Footer;
