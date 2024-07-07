import { useRef } from "react";
import "./Slider.css";

export default function Slider({ children, activeSlide, handleSlide }) {
  const slides = Array.from(document.querySelectorAll(".swiper__slide"));

  const startX = useRef(0);

  const handleTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - startX.current;

    if (diffX > 30) {
      handleSlide((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (diffX < -30) {
      handleSlide((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
    }
  };

  return (
    <div className="swiper">
      <div
        className="swiper__wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {children.map((item, index) => (
          <div key={index} className="swiper__slide">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
