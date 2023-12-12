import React, { useEffect, useState } from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/6564519353c8a4af57e822b1"
      );
      //console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          // Postコンポーネントを呼び出して、現在のpostを渡す
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
