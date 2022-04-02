import "./App.scss";
import Front from "./containers/Front/Front";
import Back from "./containers/Back/Back";
import Timeline from "./containers/Timeline/Timeline";
import Footer from "./containers/Footer/Footer";
import controller from "./assets/ARKH-controller-white.glb";

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
        <model-viewer id="reveal" class="visibility-hidden" alt="3d Controller" src={controller} ar ar-modes="webxr scene-viewer quick-look" shadow-intensity="1" loading="eager" camera-controls enable-pan auto-rotate></model-viewer>
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
