import React from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <div className="mt-4 w-[90%] mx-auto">
        <h4>O'quvchilar</h4>
      </div>
      <div className="filter w-full min-h-[60px] mb-2 flex justify-evenly items-center gap-4 flex-wrap">
        <table className="w-[90%] text-center">
          <thead>
            <tr className="h-[60px] bg-white/80">
              <th>№</th>
              <th>Ism va Familiya</th>
              <th>Telefon raqam</th>
              <th>Guruh</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                navigate(`/student/1`);
              }}
            >
              <td>1</td>
              <td>Hoshimjon Erkinov</td>
              <td>
                <a href="tel:+998911457894">+998911457894</a>
              </td>
              <td>F8-23</td>
            </tr>
            <tr
              onClick={() => {
                navigate("/students/2");
              }}
              className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer"
            >
              <td>2</td>
              <td>Po'latjon Hakimov</td>
              <td>
                <a href="tel:+998945652345">+998945652345</a>
              </td>
              <td>G6-22</td>
            </tr>
            <tr
              onClick={() => {
                navigate("/students/3");
              }}
              className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer"
            >
              <td>3</td>
              <td>Samandar Usmonov</td>
              <td>
                <a href="tel:+998993023234">+998993023234</a>
              </td>
              <td>F6-22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
