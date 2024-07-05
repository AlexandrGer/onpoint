import home from "../../images/homeIcon.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={home} alt="home-icon" className="header__icon" />
        <p className="header__text">PROJECT</p>
      </div>
    </header>
  );
}
