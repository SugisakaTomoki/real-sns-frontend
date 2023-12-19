import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../dummyData";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

// Postコンポーネントの定義
export const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  // User配列から、idが1のユーザーを検索して新しい配列に格納する
  // const user = Users.filter((user) => user.id === 1);
  // user配列全体をコンソールに出力する;
  // console.log(user[0].username);

  // useStateフックを使用して状態変数"like"とその更新関数"setLike"を宣言
  const [like, setLike] = useState(post.likes.length);

  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState({});

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  // handleLike関数の宣言
  const handleLike = async () => {
    try {
      // いいねのAPIを叩いていく
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }

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
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? // PUBLIC_FOLSER=http://localhost:3000/assetsで、毎回パスを記載するのが面倒なため、環境変数に格納
                      // "||"は、又はという意味で、今回でいうとuser.profilePictureが設定されていない場合はnoAvatar.pngを使用
                      PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
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
