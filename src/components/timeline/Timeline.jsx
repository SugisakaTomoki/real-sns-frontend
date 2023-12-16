import React, { useEffect, useState } from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";

// reactコンポーネントとしてTimelineを定義
const Timeline = ({ username }) => {
  // useStateフックを使用して、postsとsetPostsという状態変数を定義
  const [posts, setPosts] = useState([]);

  // useEffectフックを使用して、コンポーネントがマウントされたときに実行される非同期関数を定義
  useEffect(() => {
    // 非同期関数fetchPostsを定義
    const fetchPosts = async () => {
      // axiosを使用してサーバーからランタイムの投稿データを取得
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/6564519353c8a4af57e822b1");
      //console.log(response);
      // サーバーレスポンスから取得したデータをコンポーネントの状態にセット
      setPosts(response.data);
    };
    // コンポーネントがマウントされたときにfecthPosts関数を呼び出す
    fetchPosts();
    // 第二引数の空の依存配列は、このuseEffectが初回のみ実行されるように設定
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          // Postコンポーネントを呼び出して、現在のpostを渡す
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
