import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  SideBar,
  History,
  Home,
  useData,
  useAuth,
  Login,
  SignUp,
  Profile,
  VideoPage,
  LikedVideosPage,
  Playlist,
} from "./components/export";
import {
  getVideoList,
  getLikedVideos,
  getHistoryVideos,
  getUserPlaylist,
} from "./Utils/apiRequest";
import { PrivateRoute } from "./PrivateRoute";
function App() {
  const { userDetails, isUserloggedIn, userId } = useAuth();

  const { dispatch } = useData();

  useEffect(() => {
    getVideoList(dispatch);
  }, []);

  useEffect(() => {
    if (isUserloggedIn && userId) {
      getLikedVideos(userId, dispatch);
    }
  }, [isUserloggedIn]);

  useEffect(() => {
    if (isUserloggedIn && userId) {
      getHistoryVideos(userId, dispatch);
    }
  }, [isUserloggedIn]);

  useEffect(() => {
    if (isUserloggedIn && userId) {
      getUserPlaylist(userId, dispatch);
    }
  }, [isUserloggedIn]);

  return (
    <div className="App">
      {/* left side bar main-div */}
      <div className="left-side-bar-main-div">
        <SideBar />
      </div>

      {/* middle main div */}
      <div className="middle-main-div ">
        {/* main elements */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <PrivateRoute path="/account" element={<Profile />} />
          <PrivateRoute path="/likedvideos" element={<LikedVideosPage />} />
          <Route path="/:videoId" element={<VideoPage />} />
          <PrivateRoute path="/history" element={<History />} />
          <PrivateRoute path="/playlist" element={<Playlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
