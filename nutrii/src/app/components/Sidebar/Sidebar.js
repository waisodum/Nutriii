import "./sidebar.css";
// import {
//   RssFeed,
//   Chat,

//   Group,

//   HelpOutline,
// } from "@material-ui/icons";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-[2vw] w-[100%] text-center">Menu</h2>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          
          {/* <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li> */}
          
          {/* <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li> */}
 
        </ul>
      
      </div>
    </div>
  );
}