import { useData, useAuth } from "../export";
import { Link } from "react-router-dom";
import "./playlistcard.css";
import { AddRemoveVideoPlaylist } from "../../Utils/apiRequest";
export const PlaylistVideoCard = ({ _id, playlistId }) => {
  const {
    state: { videoList },
    dispatch,
  } = useData();
  const { userId } = useAuth();

  const { title, url, views, date, author, image } = videoList.find(
    (item) => item._id === _id
  );

  return (
    <div className="plalist-video-card-div">
      <div className="plalist-video-card-img-div">
        <img className="plalist-video-card-img" src={image} />
      </div>
      <div className="plalist-video-card-info-div">
        <h4>{title}</h4>
        <p>{author}</p>
        <p>{date}</p>
        <button
          onClick={() =>
            AddRemoveVideoPlaylist(userId, playlistId, _id, dispatch)
          }
          className="btn-playlist-remove-video"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
