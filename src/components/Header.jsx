import React from "react";

export default function Header() {
  return (
    <div className="w-auto h-16 p-4 bg-white flex justify-between items-center shadow-md">
      <input type="text" placeholder="Search" className=" h-4 my-5 py-4 px-6 rounded-full bg-gray-200 shadow-sm  focus:outline-none border-2 border-gray-300 focus:border-blue-400" />
      <div className="flex flex-col text-right ">
        <div>John Doe</div>
        <div>Admin</div>
      </div>
    </div>
  );
}
