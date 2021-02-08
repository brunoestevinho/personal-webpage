import React from "react";

import TimelineItem from "./timelineItem";
import timelineData from "../data/timelineData";

const timeline = () => {
  if (timelineData.length > 0) {
    return (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  }
};

export default timeline;
