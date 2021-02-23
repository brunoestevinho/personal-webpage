import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import TimelineItem from "./timelineItem";
import timelineData from "../data/timelineData";

const timeline = () => {
  if (timelineData.length > 0) {
    return (
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="timeline-container pt-20">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </ScrollAnimation>
    );
  }
};

export default timeline;
