import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();
const userplaylist = s.getUserPlaylists()

function SidebarPlaylist({ option = "test", Icon }) {
  return (
    <div className="sidebarPlaylist">
        {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{userplaylist}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarPlaylist;
