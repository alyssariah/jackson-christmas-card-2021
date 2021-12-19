import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageDialog from "../ImageDialog/ImageDialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Event.scss";

export default function Event({ event, index, last }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(event.images[0]);

  const desktop = useMediaQuery("(min-width:1024px)");
  const [containerRef, inView] = useInView({
    threshold: desktop ? 0.65 : 0.55,
    trackVisibility: true,
    delay: 100,
  });

  const handleClickOpen = (img) => {
    setImage(img);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="eventWrapper">
      <div className="christmasLights">
        <ul className={!index ? "vl first" : "vl"}>
          {!index && (
            <div className="outletContainer">
              <div className="outlet"></div>
              <i className="fas fa-plug plug"></i>
            </div>
          )}
          <li className={inView ? event.color : null}></li>
        </ul>
      </div>
      <div className={last ? "yearEvent last" : "yearEvent"} ref={containerRef}>
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
                onClick={() => handleClickOpen(img)}
              />
            );
          })}
        </div>
        <ImageDialog open={open} selectedImage={image} onClose={handleClose} />
      </div>
    </div>
  );
}
