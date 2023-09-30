import { useState } from "react";
import { useEffect } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import {plugConnect } from "../js/plugConnect.js";
// import * as backend from "../../declarations/hey_backend"

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [principalId, setPrincipalId] = useState(null);
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
              onClick={async () => {
                try {
                  const principalId = await plugConnect();
                  setPrincipalId(principalId)
                } catch (e) {
                  console.warn(e);
                }
              }}
              className="connectBtn text-white items-center mt-4"
            >
              {principalId ? principalId : "Connect Wallet"}
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
              onClick={async () => {
                try {
                  const principalId = await plugConnect();
                  setPrincipalId(principalId)
                } catch (e) {
                  console.warn(e);
                }
              }}
              className="connectBtn text-white items-center mt-4"
            >
              {principalId ? principalId : "Connect Wallet"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
