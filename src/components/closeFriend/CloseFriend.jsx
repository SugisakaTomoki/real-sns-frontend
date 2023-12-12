import React from "react";

export default function CloseFriend({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        // PUBLIC_FOLDERがURLのベースを表し、user.profilepictureがそのあとに続くファイルの相対パス
        src={PUBLIC_FOLDER + user.profilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
