import home from "../../images/homeIcon.svg";
import "./Header.css";

export default function Header({ handleSlide }) {
  function onChange() {
    handleSlide(0);
  }
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={home}
          alt="home-icon"
          className="header__icon"
          onClick={onChange}
        />
        <p className="header__text">PROJECT</p>
      </div>
    </header>
  );
}
