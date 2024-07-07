import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import SlideOne from "./components/SlideOne/SlideOne";
import SlideThree from "./components/SlideThree/SlideThree";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import { useState } from "react";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="App">
      <Header handleSlide={setActiveSlide} />
      {/* <SlideOne /> */}
      {/* <SlideTwo /> */}
      {/* <SlideThree /> */}
      <Slider activeSlide={activeSlide} handleSlide={setActiveSlide}>
        <SlideOne handleSlide={setActiveSlide} />
        <SlideTwo />
        <SlideThree />
      </Slider>
    </div>
  );
}

export default App;
