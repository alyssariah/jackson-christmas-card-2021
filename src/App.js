import "./App.scss";
import Front from "./containers/Front/Front";
import Back from "./containers/Back/Back";
import Timeline from "./containers/Timeline/Timeline";
import Footer from "./containers/Footer/Footer";

function App() {
  const flipCard = () => {
    document
      .getElementById("back")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="app">
        <div id="front">
          <Front flipCard={flipCard} />
        </div>
        <div id="back">
          <Back />
        </div>
        <Timeline />
        <Footer />
      </div>
    </>
  );
}

export default App;
