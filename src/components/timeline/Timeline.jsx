import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

// reactコンポーネントとしてTimelineを定義
const Timeline = ({ username }) => {
  // useStateフックを使用して、postsとsetPostsという状態変数を定義
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  // useEffectフックを使用して、コンポーネントがマウントされたときに実行される非同期関数を定義
  useEffect(() => {
    // 非同期関数fetchPostsを定義
    const fetchPosts = async () => {
      // axiosを使用してサーバーからランタイムの投稿データを取得
      const response = username
        ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
        : await axios.get(`/posts/timeline/${user._id}`); //ホームの場合
      //console.log(response);
      // サーバーレスポンスから取得したデータをコンポーネントの状態にセット
      setPosts(response.data);
    };
    // コンポーネントがマウントされたときにfecthPosts関数を呼び出す
    fetchPosts();
    // 第二引数の空の依存配列は、このuseEffectが初回のみ実行されるように設定
  }, [username, user._id]);

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
