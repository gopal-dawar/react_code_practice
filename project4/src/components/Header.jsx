import React from "react";
import { Search } from "lucide-react";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-20 py-2 bg-sky-300 text-white">
        <div className="logo">
          <h4 className="font-bold text-3xl p-1">Gopal Dawar</h4>
        </div>
        <div className="nav">
          <ul className="flex gap-5 p-2">
            <li>
              <a
                href="#"
                className="hover:bg-amber-300 py-2 px-4 text-2xl hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-300 py-2 px-4 text-2xl hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-300 py-2 px-4 text-2xl hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-300 py-2 px-4 text-2xl hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-300 py-2 px-4 text-2xl hover:text-white"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center border-2 my-2  px-3 rounded-lg">
          <input
            type="search"
            className="border-0 outline-0"
            placeholder="Search Here..."
          />
          <Search size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
