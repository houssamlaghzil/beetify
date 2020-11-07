import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import SidebarPlaylist from "./SidebarPlaylist";
import {Home} from "@material-ui/icons";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);


  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://image.freepik.com/free-vector/bee-logo-yellow_20065-150.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <SidebarPlaylist/>
    </div>
  );
}

export default Sidebar;
