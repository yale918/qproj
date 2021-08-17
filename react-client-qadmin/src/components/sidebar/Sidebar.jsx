import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidetarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidetarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Users
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Products
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div><div className="sidebarMenu">
          <h3 className="sidetarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div><div className="sidebarMenu">
          <h3 className="sidetarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
