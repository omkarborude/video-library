import { useState, useEffect } from "react";
import { useData, useAuth } from "../export";
import {
  AddRemoveVideoPlaylist,
  createNewUserPlaylist,
} from "../../Utils/apiRequest";
import { videoExistsAlready } from "../../Utils/arrayFunctions";
import "./addtoplaylist.css";

export const AddToPlaylistCard = ({
  _id,
  setshowAddPlaylistCard,
  showAddPlaylistCard,
}) => {
  const {
    state: { playlist },
    dispatch,
  } = useData();
  const { isUserloggedIn, userId } = useAuth();
  const [playlistName, setplaylistName] = useState("");

  return (
    <div className="Playlist-Card-container">
      <div className="playlist-card-inner-div">
        <p className="playlist-create-tag">User Playlist's</p>
        <div>
          <ul>
            {playlist.map(({ _id: playlistId, name, videos }) => (
              <li key={playlistId} className="playlist-list-li">
                <label>
                  <input
                    type="checkbox"
                    onChange={() =>
                      AddRemoveVideoPlaylist(userId, playlistId, _id, dispatch)
                    }
                    checked={videoExistsAlready(videos, _id)}
                  />
                  {name}
                </label>
              </li>
            ))}
          </ul>
          <div className="playlist-creatnew-div">
            <input
              onChange={(e) => setplaylistName(e.target.value)}
              value={playlistName}
              className="creatnewlist-input"
              type="text"
              placeholder="Creat New Playlist"
            />
            <span
              className="btn-creat-new-playlist"
              onClick={() =>
                createNewUserPlaylist(
                  userId,
                  playlistName,
                  _id,
                  dispatch,
                  setplaylistName
                )
              }
            >
              create
            </span>
          </div>
          <button
            onClick={() => setshowAddPlaylistCard((ShowCard) => !ShowCard)}
            className="btn-close-creatplaylist-card"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
