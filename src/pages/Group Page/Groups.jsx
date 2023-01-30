import React, { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../Api/Axios/AccessToken";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";
const Groups = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [curentPage, setCurentPage] = useState(1);
  const coursesPerPage = 6;
  const indexOfLastPage = curentPage * coursesPerPage;
  const indexFirstPage = indexOfLastPage - coursesPerPage;
  const curentCourses = courses.slice(indexFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurentPage(pageNumber);
  useEffect(() => {
    const getGroups = async (url) => {
      const response = await Axios.get(url);
      setCourses(await response.data);
      setLoading(true);
    };
    getGroups("groups/");
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="mt-3 w-[90%] mx-auto">
        <h4>Guruhlar</h4>
      </div>
      <div className="filter w-full min-h-0 mb-2 flex justify-evenly items-center gap-3 flex-wrap">
        {loading ? (
          <>
            <table className="w-[90%] text-center">
              <thead>
                <tr className="h-[60px] bg-white/80">
                  <th>№</th>
                  <th>Guruh nomi</th>
                  <th>Kurslar</th>
                  <th>Vaqti</th>
                  <th>Kurs Narxi</th>
                  <th>Holati</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {curentCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="h-[50px] bg-white hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      navigate(`/group/${course.id}`);
                    }}
                  >
                    <td>{course.id}</td>
                    <td>{course.groupName}</td>
                    <td>{course.course.courseName}</td>
                    <td>
                      {course.groupStartDate + " / " + course.groupEndDate}
                    </td>
                    <td>{course.course.coursePriceForMonth} so'm</td>
                    <td>{course.groupStatus.statusName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalCourses={courses.length}
              coursesPerPage={coursesPerPage}
              paginate={paginate}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export default Groups;
