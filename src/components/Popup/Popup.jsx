import { useState } from "react";
import "./Popup.css";

const list = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Mi bibendum neque egestas congue quisque egestas diam",
  "Venenatis lectus magna fringilla urna",
  "Venenatis lectus magna fringilla urna",
  "Bla bla bla",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
];

const chunkArray = (array, size) => {
  const modifiedArray = array.map((item, index) => {
    return {
      index: index + 1,
      item: item,
    };
  });
  const result = [];
  for (let i = 0; i < modifiedArray.length; i += size) {
    result.push(modifiedArray.slice(i, i + size));
  }
  return result;
};

export default function Popup({ active, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advantageChunks = chunkArray(list, 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % advantageChunks.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + advantageChunks.length) % advantageChunks.length
    );
  };

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
          <ul className="popup__items">
            {advantageChunks[currentIndex].map((advantage, index) => (
              <li className="popup__item" key={index}>
                {advantage.index < 10 ? (
                  <span>0{advantage.index}</span>
                ) : (
                  <span>{advantage.index}</span>
                )}
                <p>{advantage.item}</p>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <button className="button_prev" onClick={prevSlide}></button>
            <div className="circles">
              {advantageChunks.map((product, index) => (
                <div
                  key={index}
                  className={
                    currentIndex === index ? "circle circle_active" : "circle"
                  }
                ></div>
              ))}
            </div>
            <button className="button_next" onClick={nextSlide}></button>
          </div>
        </div>
        <button
          className="button_close"
          onClick={() => {
            handleClosePopup();
          }}
        ></button>
      </div>
    </section>
  );
}
