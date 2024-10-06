import React from "react";

export default function FilterSidebar() {
  return (
    <div className=" w-2/12 bg-white shadow-lg p-4 m-8 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Filter by</h3>
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
    </div>
  );
}
