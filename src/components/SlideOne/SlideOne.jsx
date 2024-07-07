import bakti_1 from "../../images/bakti_1.png";
import bakti_2 from "../../images/bakti_2.png";
import bakti_3 from "../../images/bakti_3.png";
import bakti_4 from "../../images/bakti_4.png";
import sperm from "../../images/sperm.png";
import "./SlideOne.css";

export default function SlideOne({ handleSlide }) {
  function onChange() {
    handleSlide(1);
  }

  return (
    <section className="slide slide_one">
      <div className="slide__container">
        <h1 className="slide__title">ПРИВЕТ,</h1>
        <p className="slide__subtitle">
          ЭТО <span>НЕ</span> КОММЕРЧЕСКОЕ ЗАДАНИЕ
          <button className="button" onClick={onChange}>
            <span className="button__icon"></span>Что дальше?
          </button>
        </p>
      </div>
      <img src={bakti_1} alt="bakti" className="bakti bakti_one" />
      <img src={bakti_2} alt="bakti" className="bakti bakti_two" />
      <div className="orbit">
        <img src={bakti_3} alt="bakti" className="bakti bakti_three" />
      </div>
      <img src={bakti_4} alt="bakti" className="bakti bakti_four" />
      <img src={sperm} alt="sperm" className="sperm sperm_first" />
    </section>
  );
}
