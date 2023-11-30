import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
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
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
