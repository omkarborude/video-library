import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useData } from "../export";

export const SideBar = () => {
  const { state, likedVideos } = useData();
  const { userDetails, isUserloggedIn, username } = useAuth();

  return (
    <div className="sidebar-inner-main-div">
      {/* sidebar tag */}

      <div className="sidebar-tag-div">
        <Link to="/" className="link-no-style">
          <i class="fab fa-youtube"></i>
          <span>NeoTube</span>
        </Link>
      </div>

      {/* sidebar profile div */}

      {isUserloggedIn ? (
        <Link to="/account" className="link-no-style">
          <div className="sidebar-profile-div">
            <i class="far fa-user-circle"></i>
            <p>{username ? ` ${username} ` : "Login"}</p>
          </div>
        </Link>
      ) : (
        <Link to="/login" className="link-no-style">
          <div className="sidebar-profile-div">
            <i class="far fa-user-circle"></i>
            <p>Login</p>
          </div>
        </Link>
      )}

      {/* sidebar option div */}
      <div className="sidebar-option-main-div">
        <Link to="/" className="link-no-style">
          <div className="sidebar-option-div">
            <i class="fas fa-home"></i>
            <i className="sidebar-option-tag">Home</i>
          </div>
        </Link>

        <Link to="/history" className="link-no-style">
          <div className="sidebar-option-div">
            <i class="fas fa-history"></i>
            <i className="sidebar-option-tag">History</i>
          </div>
        </Link>

        <Link to="/playlist" className="link-no-style">
          <div className="sidebar-option-div">
            <i class="fas fa-list-ul"></i>
            <i className="sidebar-option-tag">Playlist</i>
          </div>
        </Link>

        <Link to="/likedVideos" className="link-no-style">
          <div className="sidebar-option-div">
            <i class="fas fa-thumbs-up"></i>
            <i className="sidebar-option-tag">
              Liked Videos
              <span className="sidebar-likevideo-length">
                {state.likedVideos ? state.likedVideos.length : "0"}
              </span>
            </i>
          </div>
        </Link>
      </div>
    </div>
  );
};
