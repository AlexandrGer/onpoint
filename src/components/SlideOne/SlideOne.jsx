import "./SlideOne.css";

export default function SlideOne() {
  return (
    <section className="slide">
      <div className="slide__container">
        <h1 className="slide__title">ПРИВЕТ,</h1>
        <p className="slide__subtitle">
          ЭТО <span>НЕ</span> КОММЕРЧЕСКОЕ ЗАДАНИЕ
          <button className="button">
            <span className="button__icon"></span>Что дальше?
          </button>
        </p>
      </div>
    </section>
  );
}
