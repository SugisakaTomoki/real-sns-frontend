import React from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
import { Posts } from "../../dummyData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {/* /* Posts配列をマップして、各postに対して以下の処理を行う */}
        {Posts.map((post) => (
          // Postコンポーネントを呼び出して、現在のpostを渡す
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
