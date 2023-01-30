import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios/AccessToken";
import Loading from "../../components/Loading";

export default function AboutGroup(chooseGroups) {
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGroup = async (url) => {
      const response = await Axios.get(url);
      setGroup(await response.data);
      setLoading(true);
    };
    getGroup("group/4");
  });
  return (
    <div className="p-5 md:w-[400px] w-[90%] min-h-[450px] bg-white shadow-xl shadow-gray-400 rounded-lg flex flex-col justify-start">
      {loading ? (
        <>
          <h5>Guruh nomi: {group.groupName}</h5>
          <div className="w-full min-h-[350px] border rounded-lg p-4">
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
