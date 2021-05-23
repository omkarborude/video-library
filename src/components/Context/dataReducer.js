const ProductsArryExist = (array, id) => array.some((item) => item === id);

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOLIST":
      return { ...state, videoList: payload };

    case "LOAD_LIKED_VIDEOS":
      return { ...state, likedVideos: payload };

    case "SET_HISTORY":
      return { ...state, history: payload };

    case "LOAD_PLAYLIST":
      return { ...state, playlist: payload };

    case "FILTER_CATEGORY":
      return { ...state, categoryFilter: payload };

    case "SEARCH_VIDEO":
      return { ...state, searchValue: payload.toLowerCase() };

    case "CLEAR_SEARCH":
      return { ...state, searchValue: "" };

    case "TOGGLE_LIKED_VIDEOS":
      console.log("hapenning");
      return {
        ...state,
        likedVideos: state.likedVideos.some((videoId) => videoId === payload)
          ? state.likedVideos.filter((video) => video !== payload)
          : state.likedVideos.concat(payload),
      };
    case "UPDATE_PLAYLIST_DATA":
      const list = state.playlist.find(
        (item) => item._id === payload.playlistId
      );
      const videoFlag = list.videos.some((videoId) => videoId === payload._id);
      return {
        ...state,

        playlist: state.playlist.map((listItem) =>
          listItem._id === list._id
            ? {
                ...listItem,
                videos: videoFlag
                  ? listItem.videos.filter((videoId) => videoId !== payload._id)
                  : listItem.videos.concat(payload._id),
              }
            : listItem
        ),
      };

    case "REMOVE_USER_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter((playlist) => playlist._id !== payload),
      };
    case "LOAD_USER_HISTORY":
      return { ...state, history: payload };

    case "UPDATE_HISTORY":
      return {
        ...state,
        history: state.history.some((videoId) => videoId === payload)
          ? state.history
              .filter((videoId) => videoId !== payload)
              .concat(payload)
          : state.history.concat(payload),
      };

    case "CLEAR_HISTORY":
      return { ...state, history: payload };

    default:
      return state;
  }
};
