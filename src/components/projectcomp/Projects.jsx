import React from "react";
import "./Projects.css";
import { data } from "./data.js";
import Popup from "../popup/Popup";

import { useState } from "react";

let identity;

export const Projects = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const clicking = (event) => {
    setButtonPopup(true);

    identity = parseInt(event.currentTarget.id);
  };

  return (
    <div>
      {data.map((item) => (
        <div className="project__container">
          <div className="projectcard__container">
            <a id={item.id} onClick={clicking}>
              <div className="projectcard__img__container">
                <img className="projectcard__img" src={item.img} alt="" />
              </div>
            </a>
            <div className="projectcard__info">
              <div className="overflow-h">
                <h2 className="projectcard__title">{item.title}</h2>
              </div>
              <div className="overflow-h">
                <p className="projectcard__desc">{item.info}</p>
              </div>
            </div>
          </div>
          <Popup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
            id={identity}
          />
        </div>
      ))}
    </div>
  );
};
