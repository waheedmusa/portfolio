import React from "react";
import "./Navbar.css";
import CV from "./CV.pdf";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            className="porfolio__navbar-svg"
            href={CV}
            download="Abdulwaheed-CV"
            target="_blank"
            rel="noreferrer"
          >
            CV
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.147 9l5 5h.707l5-5-.707-.707L9 12.439V2H8v10.44L3.854 8.292 3.147 9z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};
