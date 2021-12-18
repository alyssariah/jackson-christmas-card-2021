import React from "react";
import "./Event.scss";

export default function Event({ event }) {
  return (
    <div className="yearEvents">
      <div className="description">
        <h2>{event.date}</h2>
        <p>{event.description}</p>
      </div>
      <div className="images">
        {event.images.map((img) => {
          return <img className="thumbnail" src={img.src} alt={img.alt} />;
        })}
      </div>
    </div>
  );
}
