import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagination({ totalCourses, coursesPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="w-full min-h-[60px] flex justify-center gap-x-4 items-center">
      {pageNumbers.map((number) => (
        <NavLink
          to={`/groups/${number}`}
          key={number}
          onClick={() => {
            paginate(number);
          }}
          className="pagitation duration-300 w-[40px] h-[40px] flex cursor-pointer justify-center bg-white text-black items-center hover:bg-[#d0d0d0]"
        >
          {number}
        </NavLink>
      ))}
    </div>
  );
}
