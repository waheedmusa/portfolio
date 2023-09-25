import React from "react";
import "./Work.css";
import { Projects } from "../projectcomp/Projects";

export const Work = () => {
  return (
    <div id="work" className="work__group">
      <h1>
        WORK
        <svg
          className="work__title__arrow"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          class="work__title__arrow"
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
      </h1>

      <Projects />
    </div>
  );
};
