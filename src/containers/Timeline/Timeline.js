import React, { Component } from "react";
import "./Timeline.scss";
import Event from "../../components/Event/Event";
import { eventsData } from "../../services/events-data.js";

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <div className="christmasLights"></div>
        <div className="events">
          {eventsData.map((event) => {
            return <Event event={event} />;
          })}
        </div>
      </div>
    );
  }
}
