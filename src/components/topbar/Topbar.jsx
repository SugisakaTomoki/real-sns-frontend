import { Chat, Notifications, Search } from "@mui/icons-material";
import React, { useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

export default function Topbar() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"></Search>
          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconitem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconitem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
