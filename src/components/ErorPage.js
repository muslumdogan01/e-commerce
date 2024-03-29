import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icons/Icon";

const ErorPage = () => {
  return (
    <div className="bg-[#f1edea]">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center pt-5 md:pt-16">
          <ul className="flex justify-center items-center">
            <li className="text-[#84bc22] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">/</li>
            <li className="text-[#45413e]">404</li>
          </ul>
        </div>
        <div className="flex container  justify-center items-center md:px-28 py-8">
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
          <div className="basis-1/6 text-5xl text-[#45413e] text-center">
            404
          </div>
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
        </div>
        <div className="container md:px-28 md:pb-10 pb-10">
          <div class="bg-white shadow-2xl rounded-lg md:flex-row flex-col md:pt-20 pb-10 md:pb-16 mx-3 md:mt-4 flex justify-center">
            <div className="basis-1/3">
              <h1 className="text-[#84bc22] md:text-[7.063rem] text-[4.063rem] text-center md:text-left font-bold">Oops!</h1>
            </div>
            <div className="basis-1/2 ">
              <h1 class="text-xl md:text-2xl text-center md:text-left leading-9 font-semibold tracking-tight text-black  sm:leading-10">
                Sorry, this page could not be found!
              </h1>
              <p className="pt-7 pb-12 mx-4 text-center md:mx-0 md:text-left">
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. <br />
                <p className="pt-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </p>
              <Link to="/">
                <p className="text-[#84bc22] text-base cursor-pointer text-center md:text-left">
                  Go back to Homepage
                </p>
              </Link>
              <h1 className="pt-6 text-2xl font-semibold text-center md:text-left">Search our site</h1>
              <div className="pt-5 ">
                <label class="relative block mx-4 md:mx-0">
                  <p class="sr-only text-center md:text-left">Search</p>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white  w-full border border-[#e8e2d6] rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                  />
                  <span class="absolute inset-y-0 right-0 flex items-center pl-2 px-4 fill-[#595857]">
                    <Icon name="search" size={15} />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErorPage;
