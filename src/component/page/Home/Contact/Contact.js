import React from "react";
import { AiOutlineDribbble, AiOutlineTwitter } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {
  BsFacebook,
  BsFillTelephoneForwardFill,
  BsGithub,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Successfully send received your info admin panel");
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <h2 className="text-4xl text-center text-gray-600">Get In Touch</h2>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-20 md:col-span-1">
            <div className="px-4 sm:px-0">
              <div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="border-gray-700">
                    <div className="border-solid border-2 rounded-full hover:border-orange-400  w-11 h-11 flex justify-center items-center  hover:bg-orange-400">
                      <BsFillTelephoneForwardFill className="text-2xl text-gray-500 hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <p>+012 345 678 102</p>
                    <p>+012 985 758 152</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="border-rounded  ">
                    <div className="border-solid border-2 rounded-full hover:border-orange-400  w-11 h-11 flex justify-center items-center  hover:bg-orange-400">
                      <BiWorld className="text-2xl text-gray-500 hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <p>urname@email.com</p>
                    <p>urwebsitenaem.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="border-gray-700 ">
                    <div className="border-solid border-2 rounded-full hover:border-orange-400  w-11 h-11 flex justify-center items-center  hover:bg-orange-400">
                      <GoLocation className="text-2xl text-gray-500 hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <p>Address goes here,</p>
                    <p>street, Crossroad 123.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-gray-600 mt-4">
                  Follow Us
                </h2>
                <div className="mt-4 flex gap-6">
                  <a href="#">
                    <AiOutlineTwitter className="text-3xl" />
                  </a>
                  <a href="#">
                    <AiOutlineDribbble className="text-3xl" />
                  </a>
                  <a href="#">
                    <BsFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <BsGithub className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name "
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        required
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="enter your email"
                        className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                      />
                    </div>

                    <div className="col-start-1 col-end-7 ">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        required
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="email"
                        className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                      />
                    </div>

                    <div className="col-start-1 col-end-7">
                      <div className="mt-4">
                        <textarea
                          required
                          id="about"
                          name="description"
                          rows="4"
                          className="px-4 mt-2 py-2 block w-full focus:outline-none sm:text-sm border border-gray-300 rounded-md"
                          placeholder="what do you want say ?"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Contact;
