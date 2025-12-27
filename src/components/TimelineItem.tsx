import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  text: string;
  image?: string;
  position?: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  text,
  image,
}) => {
  return (
    <div className="timeline-item">
      {image && <img src={image} className="timeline-image" />}
      <div className="year-circle">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
