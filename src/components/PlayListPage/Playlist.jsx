import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./playlist.css";
import { useData, useAuth } from "../export";

import { PlaylistVideoCard } from "./PlaylistVideoCard";

export const Playlist = () => {
  const {
    state: { playlist },
  } = useData();
  const { userId, isUserloggedIn } = useAuth();

  return (
    <div>
      <h2>My Playlist's</h2>

      <div>
        {playlist.map(({ _id: playlistId, name, videos }) => (
          <div key={playlistId} className="playlist-div">
            <p className="playlist-name">
              {name}
              <span>({videos.length})</span>
            </p>

            <div className="playlist-cad-list-div">
              {videos.map((_id) => (
                <PlaylistVideoCard
                  key={_id}
                  _id={_id}
                  playlistId={playlistId}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
