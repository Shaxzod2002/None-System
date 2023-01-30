import React, { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../Api/Axios/AccessToken";

export default function CoursesFilter({ setChooseCourses }) {
  const [coursesFilter, setCoursesFilter] = useState([]);
  useEffect(() => {
    const getCoursesFilter = async (url) => {
      const response = await Axios.get(url);
      setCoursesFilter(await response.data);
    };
    getCoursesFilter("courses/");
  });
  return (
    <>
      <select
        className="w-[200px] bg-green-500 border-none rounded-md text-white py-3"
        onChange={(e) => setChooseCourses(e.target.value)}
      >
        {coursesFilter.map((item) => (
          <option value={`${item.id}`} key={item.id}>
            {item.courseName}
          </option>
        ))}
      </select>
    </>
  );
}
