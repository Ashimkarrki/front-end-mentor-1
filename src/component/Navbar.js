import React from "react";
import ToggleNavbar from "./ToggleNavbar";

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <>
      <ul className="navbar">
        <li className="navbar__item navbar__item--left">sunnyside</li>
        <li
          className="navbar__item navbar__item--svg"
          onClick={() => setNavbar(!navbar)}
        >
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </li>
        <li className="navbar__item navbar__item--right">About</li>
        <li className="navbar__item navbar__item--right">Services</li>
        <li className="navbar__item navbar__item--right">Projects</li>
        <li className="navbar__item navbar__item--right">Contact</li>
      </ul>
      {navbar && <ToggleNavbar />}
    </>
  );
};

export default Navbar;
