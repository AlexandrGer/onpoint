import { useState } from "react";
import "./Slider.css";

export default function Slider({ children, activeSlide, handleSlide }) {
  //   const [activeSlide, setActiveSlide] = useState(0);
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
      handleSlide(activeSlide + 1);
      if (activeSlide === children.length - 1) {
        handleSlide(0);
      }
    }
    if (initialTouch < endTouch) {
      if (activeSlide === 0) {
        return;
      }
      handleSlide(activeSlide - 1);
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
            props={activeSlide}
          >
            {/* {item} */}
            {item}
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
