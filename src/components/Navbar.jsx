import React from "react";
import { NavLink } from "react-router-dom";
import AddCourse from "./AddCourse";
import AddGroup from "./AddGroup";
import AddStudent from "./AddStudent";
import User from "./User";

const Navbar = ({ Icons }) => {
  return (
    <>
      <nav className="w-full min-h-[80px] shadow-md flex justify-between items-center px-2 relative">
        <div className="w-[100px] min-h-[80px] relative flex items-center left-[-0.25rem]">
          <NavLink
            className="w-[100px] absolute px-2 py-4 flex flex-col gap-2 left-0 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white text-3xl"
            to={"/"}
          >
            <Icons.FaHome />
          </NavLink>
        </div>
        <NavLink to={"/trial-tests"} className="nav-link">
          <p className="text-md font-semibold">Sinov Darslar</p>
        </NavLink>
        <NavLink to={"/active-tests"} className="nav-link">
          <p className="text-md font-semibold">Faol Talabalar</p>
        </NavLink>
        <NavLink to={"/active-lessons"} className="nav-link">
          <p className="text-md font-semibold">Faol Darslar</p>
        </NavLink>
        <AddCourse />
        <AddGroup />
        <AddStudent />
        <User />
      </nav>
    </>
  );
};

export default Navbar;
