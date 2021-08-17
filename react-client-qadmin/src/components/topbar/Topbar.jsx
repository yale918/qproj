import React from 'react'
import "./topbar.css"
//import { NotificationsNoneIcon } from '@material-ui/icons';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">sheepadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://res.cloudinary.com/yalecloud/image/upload/v1627434977/w6emkylrrngudttpocoh.jpg" alt="jump" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
