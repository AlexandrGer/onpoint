import { useState } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import SlideOne from "./components/SlideOne/SlideOne";
import SlideThree from "./components/SlideThree/SlideThree";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <Header handleSlide={setCurrentIndex} />
      <Slider activeSlide={currentIndex} handleSlide={setCurrentIndex}>
        <SlideOne handleSlide={setCurrentIndex} />
        <SlideTwo activeSlide={currentIndex} />
        <SlideThree />
      </Slider>
      <Footer />
    </div>
  );
}

export default App;
