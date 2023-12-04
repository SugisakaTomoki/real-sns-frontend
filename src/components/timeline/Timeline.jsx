import React from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Timeline;
