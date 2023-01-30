import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ Icons }) => {
  return (
    <div className="menu flex flex-col justify-start gap-2 items-center w-[110px] shadow-2xl py-2">
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/attendances/1"}
      >
        <Icons.BiCheckDouble />
        <p>Davomat</p>
      </NavLink>
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center justify-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/groups/1"}
      >
        <Icons.GiTeacher />
        <p className="text-center">Guruhlar va O'qituvchilar</p>
      </NavLink>
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center justify-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/teachers"}
      >
        <Icons.FaLayerGroup />
        <p>Ustozlar</p>
      </NavLink>
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center justify-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/students"}
      >
        <Icons.FaUserGraduate />
        <p>Talabalar</p>
      </NavLink>
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center justify-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/finance"}
      >
        <Icons.AiOutlineDollar />
        <p className="text-center">Moliya Hisobot</p>
      </NavLink>
      <NavLink
        className="w-[100px] py-1 px-2 flex flex-col items-center justify-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white gap-1"
        to={"/reports"}
      >
        <Icons.ImStatsDots />
        <p>Statistika</p>
      </NavLink>
    </div>
  );
};

export default Menu;
