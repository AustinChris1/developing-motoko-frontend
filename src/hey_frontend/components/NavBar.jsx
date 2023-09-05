import { useState } from "react";
import { useEffect } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import {connectplug} from "../js/plugConnect.js"
// import * as backend from "../../declarations/hey_backend"

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Internet Computer" className="w-[150px] h-[45px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16-px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button
          onClick={connectplug}
          className="connectBtn items-center flex text-white font-poppins font-normal ml-10 justify-end"
        >
          Connect Wallet
        </button>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16-px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button
              onClick={connectplug}
              className="connectBtn text-white items-center mt-4"
            >
              Connect Wallet
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
