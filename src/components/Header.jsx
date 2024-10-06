import React from "react";

export default function Header() {
  return (
    <div className="w-auto h-16 p-4 bg-slate-300 flex justify-between items-center">
      <input type="text" placeholder="Search" className=" h-4 my-5 py-4 px-6 rounded-xl focus:outline-none focus:border-2 focus:border-blue-700" />
      <div className="flex flex-col text-right ">
        <div>John Doe</div>
        <div>Admin</div>
      </div>
    </div>
  );
}
