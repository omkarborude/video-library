import "./videopage.css";
import "../../App.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { addRemoveLikedVideo } from "../../Utils/apiRequest";
import { useNavigate, useParams } from "react-router";
import { useAuth, useData } from "../export";
import { ViewCalculator } from "../../Utils/arrayFunctions";
import { AddToPlsylist } from "../PlayListPage/AddToPlaylist";
const ProductsArryExist = (array, id) => array.some((item) => item === id);

export const VideoPage = () => {
  useEffect(() => {
    toast.dark("Loadind!", {
      position: "top-right",
      autoClose: 2000,
    });
  }, []);
  const navigate = useNavigate();

  const { videoId } = useParams();
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useData();
  console.log(likedVideos);
  const { userDetails, isUserloggedIn, userId } = useAuth();

  const {
    vid,
    title,
    author,
    image,
    views,
    date,
    url,
    subscribers,
    description,
  } = videoList.find((video) => video._id === videoId);

  return (
    <div className="video-page-main-div">
      <div className="video-page-inner-div">
        <div className="video-page-player-div">
          <iframe className="react-player" src={url} playing={true} controls />
        </div>

        <div className="video-page-video-info">
          <p className="video-page-info-title">{title}</p>
          <p className="video-page-info-author">
            Author:
            <span> {author}</span>
          </p>
          <p className="video-page-info-view-data">
            Views: <span>{ViewCalculator({ views })}</span>
            <p className="video-page-info-date">
              || Date: <span>{date}</span>
            </p>
          </p>
        </div>

        <div className="video-page-buttons">
          <button
            onClick={() =>
              isUserloggedIn
                ? addRemoveLikedVideo(videoId, userId, dispatch)
                : navigate("/login")
            }
            className={
              ProductsArryExist(likedVideos, videoId)
                ? "video-page-liked-button"
                : "video-page-like-button"
            }
          >
            <a>Like</a>
          </button>

          {/* <button className="video-page-playlist-button">Save</button> */}
          <button className="video-page-playlist-button">
            <AddToPlsylist _id={videoId} />
          </button>
        </div>
      </div>
    </div>
  );
};
