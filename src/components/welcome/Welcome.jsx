import React from "react";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcome__group">
      <h1 className="head_1">HELLO,</h1>
      <h1 className="head_1">I'M ABDULWAHEED</h1>
      <div className="welcome__text">
        <svg
          className="job__arrow"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          class="job__arrow"
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
        <h3>FRONTEND DEVELOPER</h3>
      </div>
      <p className="welcome__info">
        Hi there! My name is Abdulwaheed Musa, I am a front-end web developer
        and UI/UX designer based in Nairobi, Kenya.
      </p>
    </div>
  );
};
