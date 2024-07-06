import "./App.css";
import Header from "./components/Header/Header";
import Slide2 from "./components/Slide2/Slide2";
import Slider from "./components/Slider/Slider";
import SlideOne from "./components/SlideOne/SlideOne";

function App() {
  return (
    <div className="App">
      <Header />
      <SlideOne />
      {/* <Slider>
	  <SlideOne />
        <Slide2 />
      </Slider> */}
    </div>
  );
}

export default App;
