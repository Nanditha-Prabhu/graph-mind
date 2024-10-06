import React from "react";

export default function InnerSidebar() {
  return (
    <div className=" w-2/12 bg-white shadow-lg p-4 m-8 rounded-lg">
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full focus:shadow-xl focus:font-bold">
        + Add Document
      </button>

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">Label</h3>
        <ul>
          <li className="mb-2">
            <span className="text-teal-600">■</span> Important
          </li>
          <li className="mb-2">
            <span className="text-yellow-600">■</span> Improvement
          </li>
          <li>
            <span className="text-orange-600">■</span> Flag
          </li>
        </ul>
        <a href="#"><p className="font-semibold text-md text-slate-500 m-4">+ Click to track</p></a>
      </div>
    </div>
  );
}
