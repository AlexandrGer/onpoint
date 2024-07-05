import { useState } from "react";
import "./Slider.css";

export default function Slider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);
  let initialTouch;
  let endTouch;
  function swipe(e) {
    if (e.type === "touchstart") {
      initialTouch = e.changedTouches[0].clientX;
    }
    if (e.type === "touchend") {
      endTouch = e.changedTouches[0].clientX;
    }
    if (initialTouch > endTouch) {
      setActiveSlide(activeSlide + 1);
      if (activeSlide === children.length - 1) {
        setActiveSlide(0);
      }
    }
    if (initialTouch < endTouch) {
      if (activeSlide === 0) {
        return;
      }
      setActiveSlide(activeSlide - 1);
    }
  }

  return (
    <div className="swiper">
      <div className="swiper__wrapper">
        {children.map((item, index) => (
          <div
            key={index}
            className={`swiper__slide ${index !== activeSlide ? "hidden" : ""}`}
            onTouchStart={(e) => swipe(e)}
            onTouchEnd={(e) => swipe(e)}
          >
            {item}
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
