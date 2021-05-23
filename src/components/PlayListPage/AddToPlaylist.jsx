import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useData, useAuth } from "../export";
import { AddToPlaylistCard } from "./AddToListCard";
import "./addtoplaylist.css";
export const AddToPlsylist = ({ _id }) => {
  const navigate = useNavigate();

  const {
    state: { playlist },
  } = useData();
  const { isUserloggedIn, userId } = useAuth();

  const [showAddPlaylistCard, setshowAddPlaylistCard] = useState(false);

  const checkInPlaylist = (_id) =>
    playlist.some((item) => item.videos.some((videoId) => videoId === _id));

  return (
    <>
      {checkInPlaylist(_id) ? (
        <a
          className="btn-saved-playlist"
          onClick={() => setshowAddPlaylistCard((show) => !show)}
        >
          <i class="far fa-bookmark"></i>
          Saved !
        </a>
      ) : (
        <a
          className="btn-save-playlist"
          onClick={() =>
            isUserloggedIn
              ? setshowAddPlaylistCard((show) => !show)
              : navigate("/login")
          }
        >
          save
        </a>
      )}
      {showAddPlaylistCard && (
        <AddToPlaylistCard
          _id={_id}
          setshowAddPlaylistCard={setshowAddPlaylistCard}
          showAddPlaylistCard={showAddPlaylistCard}
        />
      )}
    </>
  );
};
