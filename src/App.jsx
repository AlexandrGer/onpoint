import "./App.css";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import Slide2 from "./components/Slide2/Slide2";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider>
        <Slide />
        <Slide2 />
      </Slider>
    </div>
  );
}

export default App;
