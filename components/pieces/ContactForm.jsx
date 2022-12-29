import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className="px-4 sm:px-8 py-24 border-b-[1px] border-gray_project grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className=" text-sm md:text-lg  text-gray_project tracking-[4px] md:tracking-[7px] ">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get in touch - Let's work together
          </h2>
        </div>

        <div className="">
          <h3 className="text-lg lg:text-xl text-gray_project">ADDRESS</h3>

          <div className="mt-1 font-medium md:text-lg">
            Calle 9 <br /> Urb.COOPIP, SMP <br />
            Lima, Peru
          </div>
        </div>

        <div>
          <p className="block text-gray_project font-medium text-lg">
            Got a project? Drop me a line if you want to work together and bring
            that idea to life.
          </p>
        </div>
      </div>

      <div>
        <form action="#" className="flex flex-col space-y-12 lg:space-y-16">
          <div className="flex flex-col space-y-2 md:space-y-3">
            <label
              htmlFor="name"
              className="text-gray_project  font-medium inline-block self-start lg:text-lg"
            >
              Your Name
            </label>
            <input
              type="text"
              className="py-2 px-2 focus:outline-none  border-b-2 border-gray-200 focus:border-b-project transition-[border]"
              id="name"
              placeholder="What's your name?"
            />
          </div>

          <div className="flex flex-col space-y-2 md:space-y-3">
            <label
              htmlFor="email"
              className="text-gray_project  font-medium inline-block self-start  lg:text-lg"
            >
              Your Email
            </label>
            <input
              type="text"
              className="py-2 px-2 focus:outline-none  border-b-2 border-gray-200 focus:border-b-project transition-[border]"
              id="email"
              placeholder="What's your email address?"
            />
          </div>

          <div className="flex flex-col space-y-2 md:space-y-3">
            <label
              htmlFor="service"
              className="text-gray_project  font-medium inline-block self-start lg:text-lg"
            >
              Service
            </label>
            <select
              id="service"
              className="py-2 px-2 focus:outline-none  border-b-2 border-gray-200 focus:border-b-project transition-[border]"
            >
              <option value="interested" disabled>
                What are you interested in?
              </option>
              <option value="help">Need help with a one-off project </option>
              <option value="partnership">
                Looking for a long term partnership
              </option>
              <option value="hire">Want to hire me full-time</option>
              <option value="hi">Just wanted to say hi!</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-3">
            <label
              htmlFor="message"
              className="text-gray_project  font-medium inline-block self-start lg:text-lg"
            >
              Message
            </label>
            <input
              type="text"
              className="py-2 px-2 focus:outline-none  border-b-2 border-gray-200 focus:border-b-project transition-[border]"
              id="message"
              placeholder="What's your message?"
            />
          </div>

          <div classname="flex flex-col">
            <p className="text-red-600 inline-block font-medium">
              This form doesn't work!! It's just for presentation purposes
            </p>
            <button
              onClick={(e) => e.preventDefault()}
              className="font-semibold px-1 py-2 block"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
