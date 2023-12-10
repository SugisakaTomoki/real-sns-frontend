import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

// Postコンポーネントの定義
export const Post = ({ post }) => {
  // User配列から、idが1のユーザーを検索して新しい配列に格納する
  // const user = Users.filter((user) => user.id === 1);
  // user配列全体をコンソールに出力する;
  // console.log(user[0].username);

  // useStateフックを使用して状態変数"like"とその更新関数"setLike"を宣言
  const [like, setLike] = useState(post.like);

  const [isLiked, setIsLiked] = useState(false);

  // handleLike関数の宣言
  const handleLike = () => {
    // setLikeを使用してlikeの値を更新
    // isLikedがtrueならlikeを1減算、falseなら1加算
    setLike(isLiked ? like - 1 : like + 1);
    // setIsLikedを使用してisLikedの値を反転させる※!は論理値を反転させる意味
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/heart.png"
              alt=""
              className="likeIcon"
              // reactコンポーネント内でボタンがクリックされたときに"handleLike"関数を実行する為のイベントハンドラ
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
