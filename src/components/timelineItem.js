import React from "react";

const timelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ backgroundCfolor: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <h1>
          <strong>{data.title}</strong>
        </h1>
        <p>{data.text}</p>
        <i>{data.subtext}</i>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        <span className="square" />
      </div>
    </div>
  );
};

export default timelineItem;
