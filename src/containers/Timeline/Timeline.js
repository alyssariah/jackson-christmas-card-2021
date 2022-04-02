import React from "react";
import Event from "../../components/Event/Event";
import { eventsData } from "../../services/events-data.js";
import "./Timeline.scss";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="events" id="ref">
        {eventsData.map((event, index) => {
          return (
            <Event
              event={event}
              index={index}
              key={index}
              last={index === eventsData.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}
