import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "./Navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <aside className=" w-2/12 h-auto bg-white shadow-lg p-4 flex flex-col justify-between">
        <nav className="mb-6 h-auto">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">GraphMind</h2>
          <ul>
            {navigation.map((item)=>(
            <li className="mb-4">
              <Link to={item.href}  className={classNames(
                              item.href === location.pathname
                                ? "bg-blue-100 text-blue-600 rounded-lg "
                                : "text-black ",
                              "font-semibold  px-2 py-1.5"
                            )}>
                {item.name}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <a
            href="#"
            className=" group relative flex justify-start items-center rounded hover:bg-blue-50 px-2 py-1.5 text-blue-500 hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className=" ml-4">Settings</span>
          </a>
          <form action="#">
            <button
              type="submit"
              className="group relative flex w-full justify-start items-center rounded-lg px-2 py-1.5  text-blue-500 hover:bg-blue-50 hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className=" ml-4">Logout</span>
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
