import "./Front.scss";

function Front({ flipCard }) {
  return (
    <div className="front">
      <div className="front-description">
        <div className="arrows-down">
          <i
            className="icon-down--small fas fa-chevron-down"
            onClick={flipCard}
          ></i>
          <i
            className="icon-down--large fas fa-chevron-down"
            onClick={flipCard}
          ></i>
        </div>
        <div className="text-container">
          <h2>ALYSSA & BRIAN</h2>
          <p>Favorite Memories of 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Front;
