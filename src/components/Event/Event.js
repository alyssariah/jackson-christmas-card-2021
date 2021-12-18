import React from "react";
import { useInView } from "react-intersection-observer";
import "./Event.scss";

export default function Event({ event }) {
  const [containerRef, inView] = useInView({
    threshold: 0.65,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <div className="eventWrapper">
      <div className="christmasLights">
        <ul className="vl">
          <li className={inView ? event.color : null}></li>
        </ul>
      </div>
      <div className="yearEvents" ref={containerRef}>
        <div className="description">
          <h2>{event.date}</h2>
          <p>{event.description}</p>
        </div>
        <div className="images">
          {event.images.map((img, index) => {
            return (
              <img
                className="thumbnail"
                key={index}
                src={img.src}
                alt={img.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
