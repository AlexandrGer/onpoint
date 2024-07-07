import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import SlideOne from "./components/SlideOne/SlideOne";
import SlideThree from "./components/SlideThree/SlideThree";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <Header handleSlide={setCurrentIndex} />
      {/* <SlideOne /> */}
      {/* <SlideTwo /> */}
      {/* <SlideThree /> */}
      <Slider activeSlide={currentIndex} handleSlide={setCurrentIndex}>
        <SlideOne handleSlide={setCurrentIndex} />
        <SlideTwo />
        <SlideThree />
      </Slider>
    </div>
  );
}

export default App;
