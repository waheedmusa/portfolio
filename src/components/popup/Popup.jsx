import React from "react";
import "./Popup.css";

import { data } from "../projectcomp/data.js";

export default function Popup(props) {
  const userInputDomList = [];

  console.log(props.id);

  for (let i = 0; i < data.length; i++) {
    const id = data[i].id;

    if (id === props.id) {
      userInputDomList.push(
        <div className="popup__container">
          <div className="popup__text">
            <h3>{data[id].title}</h3>
            <p>{data[id].info}</p>
            <div className="click__btns">
              <a
                className="click__btn1"
                href={data[id].liveurl}
                target="_blank"
              >
                Live Site
              </a>
              <a
                className="click__btn2"
                href={data[id].sourceurl}
                target="_blank"
              >
                Sorce Code
              </a>
            </div>
          </div>
          <div className="popup__img">
            <img className="realPopup__img" src={data[id].img} alt="" />
          </div>
        </div>
      );
      break;
    }
  }
  return props.trigger ? (
    <div className="popup">
      <div className="popup__inner">
        {userInputDomList}
        <button className="close__btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
