import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
export default function Dashboard() {
  return (
    <div className="w-[90%] mx-auto">
      <h2>Dashboard</h2>
      <div className="w-full flex items-center justify-center">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}
