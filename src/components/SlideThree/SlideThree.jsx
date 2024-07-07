import food from "../../images/iconFood.png";
import calendar from "../../images/iconСalendar.png";
import "./SlideThree.css";

export default function SlideThree() {
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
        <button className="button">
          <span className="button__icon"></span>Подробнее
        </button>
      </div>
    </section>
  );
}
