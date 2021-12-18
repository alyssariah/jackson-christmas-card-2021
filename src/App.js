import "./App.scss";
import Front from "./containers/Front/Front";
import Back from "./containers/Back/Back";
import { useInView } from "react-intersection-observer";
import Timeline from "./containers/Timeline/Timeline";

function App() {
  const [front, inView] = useInView({
    threshold: 0.1,
  });

  const [back, inView2] = useInView({
    threshold: 0.1,
  });

  const flipCard = () => {
    document
      .getElementById("back")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="app">
        <div ref={front} id="front">
          <Front flipCard={flipCard} />
        </div>
        <div ref={back} id="back">
          <Back />
        </div>
        <Timeline />
      </div>
    </>
  );
}

export default App;
