import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Axios } from "../../Api/Axios/AccessToken";
import Loading from "../../components/Loading";
export default function Group() {
  const location = useLocation();
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getGroup = async (url) => {
      const response = await Axios.get(url);
      setGroup(await response.data);
      setLoading(true);
    };
    getGroup(`group/${location.pathname.split("/")[2]}`);
  });

  console.log(group);
  return (
    <>
      {loading ? (
        <div className="w-full min-h-full flex justify-evenly items-start gap-3 p-5 flex-wrap">
          <div className="p-5 md:w-[400px] w-[90%] min-h-[500px] bg-white shadow-xl shadow-gray-400 rounded-lg flex flex-col justify-start">
            <h5>Guruh nomi: {group.groupName}</h5>
            <div className="w-full min-h-[420px] border rounded-lg p-4">
              <h6>Guruh ma'lumotlari</h6>
              <div className="w-full min-h-[50px] flex justify-between border-b items-center">
                <p>Kurs nomi:</p>
                <p>{group.course.courseName}</p>
              </div>
              <div className="w-full min-h-[50px] flex justify-between border-b items-center">
                <p>Narxi:</p>
                <p>{group.course.coursePriceForMonth} so'm</p>
              </div>
              <div className="w-full min-h-[50px] flex justify-between border-b items-center">
                <p>Status:</p>
                <p>{group.groupStatus.statusName}</p>
              </div>
              <div className="w-full min-h-[50px] flex justify-between border-b items-center">
                <p>Guruh muddati:</p>
                <p>
                  {group.groupStartDate} / {group.groupEndDate}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[700px] w-[90%] min-h-[500px] bg-white shadow-xl shadow-gray-400 rounded-lg"></div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
