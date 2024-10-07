import React from "react";
import LineChart from "./LiveLineChart";

export default function SalesAnalytics() {
  return (
    <>
      <div className=" flex flex-col w-auto bg-white shadow-lg m-4  p-4  rounded-lg">
        <h3 className=" font-bold mb-4 text-xl text-blue-500">
          Sales Analytics
        </h3>
        <LineChart/>
      </div>
    </>
  );
}
