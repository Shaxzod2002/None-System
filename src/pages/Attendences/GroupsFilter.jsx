import React, { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../Api/Axios/AccessToken";

export default function GroupsFilter({ setChooseCourses, chooseCourses }) {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const getGroups = async (url) => {
      const response = await Axios.get(url);
      setGroups(await response.data);
    };
    getGroups("groups/");
  });
  let filterGroups = groups.filter((group) => group.course.id === 4);
  return (
    <select
      className="w-[200px] bg-green-500 border-none rounded-md text-white py-3"
      onChange={(event) => setChooseCourses(event.target.value)}
    >
      {filterGroups.map((filterGroup) => (
        <option value={filterGroup.id} key={filterGroup.id}>
          {filterGroup && filterGroup.groupName}
        </option>
      ))}
    </select>
  );
}
