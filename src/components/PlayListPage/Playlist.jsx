import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./playlist.css";
import { useData, useAuth } from "../export";
import { RemoveUserPlaylist } from "../../Utils/apiRequest";
import { PlaylistVideoCard } from "./PlaylistVideoCard";

export const Playlist = () => {
  const {
    state: { playlist },
    dispatch,
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
              <button
                onClick={() => RemoveUserPlaylist(userId, playlistId, dispatch)}
              >
                <i class="fas fa-times"></i>
              </button>
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
