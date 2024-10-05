import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <h1 className="ml-3 text-3xl font-bold">Recipe Calories</h1>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 text-gray-600 font-bold">Home</a>
          <a className="mr-5 hover:text-gray-900 text-gray-600 font-bold">Recipe</a>
          <a className="mr-5 hover:text-gray-900 text-gray-600 font-bold">About</a>
          <a className="mr-5 hover:text-gray-900 text-gray-600 font-bold">Search</a>
        </nav>
        <div className="flex relative items-center gap-3">
          <div className=" top-3 left-3 absolute"><CiSearch className="text-2xl" /></div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto pl-12 rounded-3xl"
          />
        </div>

        <div className="avatar placeholder pl-3">
          <div className=" bg-[#0BE58A] text-neutral-content w-8 rounded-full">
            <span className="text-2xl">
              <CgProfile className="text-black" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
