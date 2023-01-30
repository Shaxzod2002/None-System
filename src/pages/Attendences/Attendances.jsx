import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import AboutGroup from "./AboutGroup";
import CoursesFilter from "./CoursesFilter";
import GroupsFilter from "./GroupsFilter";
import Pagination from "./Pagination";

export const Attendances = () => {
  const [attendences, setAttedences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const [chooseCourses, setChooseCourses] = useState(0);
  const [chooseGroups, setChooseGroups] = useState(0);
  const attendencesPerPage = 8;
  useEffect(() => {
    const getAttendences = async (url) => {
      const response = await axios.get(url);
      setAttedences(await response.data);
      setLoading(true);
    };
    getAttendences("/jsons/Attendences.json");
  });

  const indexOfLastPage = curentPage * attendencesPerPage;
  const indexOfFirstPage = indexOfLastPage - attendencesPerPage;
  const curentAttendences = attendences.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  const paginate = (pageNumber) => setCurentPage(pageNumber);
  if (!attendences) return null;
  return (
    <>
      {loading ? (
        <>
          <div className="w-full py-3 flex justify-center">
            <div className="w-[90%] flex justify-between items-center">
              <CoursesFilter setChooseCourses={setChooseCourses} />
              <GroupsFilter
                setChooseCourses={setChooseGroups}
                chooseCourses={chooseCourses}
              />
            </div>
          </div>
          <div className="w-full min-h-[450px] flex justify-evenly items-start gap-3 p-2 flex-wrap">
            <AboutGroup chooseGroups={chooseGroups} />
            <div className="md:w-[700px] w-[90%] min-h-[450px] bg-white shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
              <table className="w-full text-lg text-center">
                <thead className="bg-white">
                  <tr className="h-[50px]">
                    <th>№</th>
                    <th className="text-start">Talaba</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {curentAttendences.map((item) => (
                    <tr
                      className="duration-300 h-[40px] border-b border-black hover:bg-gray-100"
                      key={item.id}
                    >
                      <td>{item.id}</td>
                      <td className="text-start">{item.name}</td>
                      <td>
                        <select className="bg-transparent cursor-pointer text-center">
                          {item.attentdence.map((option) => (
                            <option key={option.id} value={option.title}>
                              {option.title}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                totalAttendences={attendences.length}
                attendencesPerPage={attendencesPerPage}
                paginate={paginate}
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
