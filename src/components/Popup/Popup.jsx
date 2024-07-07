import { useState } from "react";
import "./Popup.css";

export default function Popup({ active, onClose }) {
  const [activeCircle, setActiveCircle] = useState(true);
  const [activeList, setActiveList] = useState(true);

  function handleClosePopup() {
    onClose(false);
  }

  return (
    <section className={active ? "popup popup_active" : "popup"}>
      <div
        className={
          active
            ? "popup__container popup__container_active"
            : "popup__container"
        }
      >
        <div className="popup__wrapper">
          <h1 className="slide__title">ПРЕИМУЩЕСТВА</h1>
          <p className="slide__subtitle slide__subtitle_three">
            BREND <span>XY</span>
          </p>
          <ul
            className={
              activeList ? "popup__items popup__items_active" : "popup__items"
            }
          >
            <li className="popup__item">
              <span>01</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li className="popup__item">
              <span>02</span>
              <p>Faucibus pulvinar elementum integer enim</p>
            </li>
            <li className="popup__item">
              <span>03</span>
              <p>Faucibus pulvinar elementum integer enim</p>
            </li>
          </ul>
          <ul
            className={
              !activeList ? "popup__items popup__items_active" : "popup__items"
            }
          >
            <li className="popup__item">
              <span>04</span>
              <p>Mi bibendum neque egestas congue quisque egestas diam</p>
            </li>
            <li className="popup__item">
              <span>05</span>
              <p>Venenatis lectus magna fringilla urna</p>
            </li>
            <li className="popup__item">
              <span>06</span>
              <p>Venenatis lectus magna fringilla urna</p>
            </li>
          </ul>
          <div className="buttons">
            <button
              className="button_prev"
              onClick={() => {
                setActiveList(true);
                setActiveCircle(true);
              }}
            ></button>
            <div className="circles">
              <div
                className={activeCircle ? "circle circle_active" : "circle"}
              ></div>
              <div
                className={!activeCircle ? "circle circle_active" : "circle"}
              ></div>
            </div>
            <button
              className="button_next"
              onClick={() => {
                setActiveList(false);
                setActiveCircle(false);
              }}
            ></button>
          </div>
        </div>
        <button
          className="button_close"
          onClick={() => {
            handleClosePopup();
            setActiveCircle(true);
            setActiveList(true);
          }}
        ></button>
      </div>
    </section>
  );
}
