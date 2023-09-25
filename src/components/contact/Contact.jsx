import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div id="contact" className="contact__container">
      <h1 className="contact__tile">
        INTERESTED IN WORKING WITH ME?
        <a
          className="contact__mail"
          href="mailto:abdulwaheedmusa0@gmail.com"
          target="_blank"
        >
          <h1>
            LET'S TALK
            <svg
              className="contact__title__arrow"
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
        </a>
      </h1>
    </div>
  );
};
