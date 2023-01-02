import React from "react";
import { motion } from "framer-motion";

import { BsPinMapFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

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
      className="  grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-20"
    >
      <div>
        <div>
          <motion.span className=" text-sm text-indigo-400 tracking-widest">
            WANT TO SAY HI?
          </motion.span>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Information
          </motion.h2>
        </div>

        <div className="mt-12">
          <p className="block text-slate-100  text-base md:text-lg">
            Feel free to reach me at any time. These are some ways you can
            contact me:
          </p>
        </div>

        <div className="mt-12 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-8 gap-x-8">
          <div className="flex items-center gap-x-6">
            <div>
              <BsPinMapFill className="text-2xl text-indigo-400" />
            </div>

            <div>
              <h3 className="text-sm text-slate-400">ADDRESS</h3>

              <div className="mt-1 font-medium ">
                Calle 9, Urb.COOPIP, SMP <br />
                Lima, Peru
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div>
              <IoPhonePortraitOutline className="text-2xl text-indigo-400" />
            </div>

            <div>
              <h3 className="text-sm text-slate-400">PHONE NUMBER</h3>

              <div className="mt-1 font-medium ">+51 992-435-526</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div>
              <CiMail className="text-2xl text-indigo-400" />
            </div>

            <div>
              <h3 className="text-sm text-slate-400">EMAIL ADDRESS</h3>

              <div className="mt-1 font-medium ">
                jesusf.rondon1809@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <motion.p className=" text-3xl flex gap-x-4 items-center">
            <span>Drop me a line </span>
            <span className="text-indigo-400">&darr;</span>
          </motion.p>
        </div>

        <form
          action="#"
          className="flex flex-col gap-y-16 lg:gap-y-20 mt-8 w-full sm:w-4/5 md:w-full self-center"
        >
          <fieldset className="flex flex-col gap-y-3 ">
            <label
              htmlFor="name"
              className="text-slate-400  font-medium inline-block  "
            >
              Your Name
            </label>
            <input
              type="text"
              className="py-3 px-2 focus:outline-none  border-b-2 border-indigo-400 focus:border-indigo-600 bg-slate-900 rounded-md transition-[border]"
              id="name"
              placeholder="What's your name?"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-y-3">
            <label
              htmlFor="email"
              className="text-slate-400  font-medium inline-block "
            >
              Your Email
            </label>
            <input
              type="text"
              className="py-3 px-2 focus:outline-none  border-b-2 border-indigo-400 focus:border-indigo-600 bg-slate-900 rounded-md transition-[border]"
              id="email"
              placeholder="What's your email address?"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-y-3">
            <label
              htmlFor="service"
              className="text-slate-400  font-medium inline-block "
            >
              Subject
            </label>
            <select
              id="subject"
              className="py-3 px-2 focus:outline-none  border-b-2 border-indigo-400 focus:border-indigo-600 bg-slate-900 rounded-md transition-[border]"
            >
              <option value="interested" disabled>
                What are you interested in?
              </option>
              <option value="help">Need help with a project </option>
              <option value="hire">Want to hire me </option>
              <option value="hi">Just wanted to say hi!</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col gap-y-3">
            <label
              htmlFor="message"
              className="text-slate-400  font-medium inline-block "
            >
              Message
            </label>
            <textarea
              className="pt-3 pb-6 px-2 focus:outline-none  border-b-2 border-t-2 border-indigo-400 focus:border-indigo-600 bg-slate-900 rounded-md transition-[border]"
              id="message"
              placeholder="What's your message?"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <button
              onClick={(e) => e.preventDefault()}
              className="font-semibold px-1 py-2 flex items-center gap-x-2 hover:text-indigo-500 transition-all w-max"
            >
              <CiMail className="text-2xl" />
              <span className="text-lg">Send message</span>
            </button>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
