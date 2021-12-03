import axios from "axios";
import { toast } from "react-toastify";

const API = "https://videolibback.omkarborude8354.repl.co";
// load data
export const getVideoList = async (dispatch) => {
  try {
    const {
      data: { videos },
    } = await axios.get("https://videolibback.omkarborude8354.repl.co/videos");
    dispatch({ type: "SET_VIDEOLIST", payload: videos });
  } catch (error) {
    alert(error);
  }
};

// liked videos
export const getLikedVideos = async (userId, dispatch) => {
  const {
    data: { response },
  } = await axios.get(
    `https://videolibback.omkarborude8354.repl.co/liked-video/${userId}`
  );
  const videoList = response.map((item) => item._id);
  dispatch({ type: "LOAD_LIKED_VIDEOS", payload: videoList });
};

export const addRemoveLikedVideo = async (_id, userId, dispatch) => {
  toast.success("Updating Likes!", {
    position: "top-right",
    autoClose: 3000,
  });
  const {
    data: { response },
  } = await axios.post(
    `https://videolibback.omkarborude8354.repl.co/liked-video/${userId}`,
    {
      _id,
    }
  );
  dispatch({
    type: "TOGGLE_LIKED_VIDEOS",
    payload: _id,
  });
};

// history
export const getHistoryVideos = async (userId, dispatch) => {
  const {
    data: { response },
  } = await axios.get(
    `https://videolibback.omkarborude8354.repl.co/history/${userId}`
  );
  const videoList = response.map((item) => item._id);
  dispatch({ type: "LOAD_USER_HISTORY", payload: videoList });
};

export const addtoHistory = async (_id, userId, dispatch) => {
  const { status } = await axios.post(
    `https://videolibback.omkarborude8354.repl.co/history/${userId}`,
    { _id }
  );
  dispatch({ type: "UPDATE_HISTORY", payload: _id });
};

export const clearHistory = async (userId, dispatch) => {
  toast.warn("Clearing Hisotry!", {
    position: "top-right",
    autoClose: 3000,
  });
  const {
    data: { response },
  } = await axios.delete(
    `https://videolibback.omkarborude8354.repl.co/history/${userId}`
  );
  dispatch({ type: "CLEAR_HISTORY", payload: response });
};

// Playlist

export const getUserPlaylist = async (userId, dispatch) => {
  let {
    data: { playlist },
  } = await axios.get(`${API}/playlist/${userId}`);
  playlist = playlist.map((list) => ({
    ...list,
    videos: list.videos.map((video) => video._id),
  }));
  dispatch({ type: "LOAD_PLAYLIST", payload: playlist });
};

export const createNewUserPlaylist = async (
  userId,
  playlistName,
  videoId,
  dispatch,
  setplaylistName
) => {
  if (playlistName) {
    toast.success("Creating Playlist!", {
      position: "top-right",
      autoClose: 3000,
    });
    let {
      data: { playlist },
    } = await axios.post(`${API}/playlist/${userId}`, {
      name: playlistName,
      _id: videoId,
    });
    playlist.videos = playlist.videos.map((item) => item._id);
    dispatch({ type: "CREAT_UPDATE_NEW_PLAYLIST", payload: playlist });
    setplaylistName("");
  }
};

export const AddRemoveVideoPlaylist = async (
  userId,
  playlistId,
  videoId,
  dispatch
) => {
  toast.warn("Updating Playlist!", {
    position: "top-right",
    autoClose: 3000,
  });
  const { status } = await axios.post(
    `${API}/playlist/${userId}/playlist/${playlistId}`,
    { _id: videoId }
  );
  dispatch({
    type: "UPDATE_PLAYLIST_DATA",
    payload: { playlistId, _id: videoId },
  });
};

export const RemoveUserPlaylist = async (userId, playlistId, dispatch) => {
  toast.dark("Deleting Playlist!", {
    position: "top-right",
    autoClose: 3000,
  });
  const { status } = await axios.put(
    `${API}/playlist/${userId}/playlist/${playlistId}`
  );
  dispatch({ type: "REMOVE_USER_PLAYLIST", payload: playlistId });
};
