import "./App.css";
import Header from "./components/Header/Header";
import SlideOne from "./components/SlideOne/SlideOne";
import SlideTwo from "./components/SlideTwo/SlideTwo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SlideOne /> */}
      <SlideTwo />
      {/* <Slider>
	  <SlideOne />
        <Slide2 />
      </Slider> */}
    </div>
  );
}

export default App;
