import food from "../../images/iconFood.png";
import calendar from "../../images/iconСalendar.png";
import bottle from "../../images/bottle.png";
import bubble_1 from "../../images/bubble/buble_1.png";
import bubble_2 from "../../images/bubble/buble_2.png";
import bubble_3 from "../../images/bubble/buble_3.png";
import bubble_4 from "../../images/bubble/buble_4.png";
import bubble_5 from "../../images/bubble/buble_5.png";
import bubble_6 from "../../images/bubble/buble_6.png";
import bubble_7 from "../../images/bubble/buble_7.png";
import bubble_8 from "../../images/bubble/buble_8.png";
import "./SlideThree.css";
import Popup from "../Popup/Popup";
import { useState } from "react";

export default function SlideThree() {
  const [active, setActive] = useState(false);

  return (
    <section className="slide slide_three">
      <div className="slide__container slide__container_three">
        <h1 className="slide__title">КЛЮЧЕВОЕ СООБЩЕНИЕ</h1>
        <p className="slide__subtitle slide__subtitle_three">
          BREND <span>XY</span>
        </p>
        <ul className="items">
          <li className="item item_big">
            <img src={food} alt="iconFood" className="item__icon" />
            <p className="item__text">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </li>
          <li className="item item_small">
            <img src={calendar} alt="iconFood" className="item__icon" />
            <p className="item__text">A arcu cursus vitae</p>
          </li>
        </ul>
        <button className="button" onClick={() => setActive(true)}>
          <span className="button__icon"></span>Подробнее
        </button>
      </div>
      <img src={bottle} alt="bottle" className="bottle" />
      <img src={bubble_1} alt="bubble" className="bubble bubble_1" />
      <img src={bubble_2} alt="bubble" className="bubble bubble_2" />
      <img src={bubble_3} alt="bubble" className="bubble bubble_3" />
      <img src={bubble_4} alt="bubble" className="bubble bubble_4" />
      <img src={bubble_5} alt="bubble" className="bubble bubble_5" />
      <img src={bubble_6} alt="bubble" className="bubble bubble_6" />
      <img src={bubble_7} alt="bubble" className="bubble bubble_7" />
      <img src={bubble_8} alt="bubble" className="bubble bubble_8" />
      <Popup active={active} onClose={setActive} />
    </section>
  );
}
