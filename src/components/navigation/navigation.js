import "./navigation.css"
import { SV } from "../../Utils/arrayFunctions";
import { useData,useAuth } from "../export";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
    const {state: { videoList, categoryFilter },dispatch,} = useData();
    const {  userDetails,isUserloggedIn,username } = useAuth();


    const [videoSearch, setvideoSearch] = useState("");

    const searchHandler = (e) => {
        if (e.keyCode === 13) {
          dispatch({ type: "SEARCH_VIDEO", payload: videoSearch });
        }
      };



    let authors = ["All videos"].concat(
        videoList.map((video) => video.author).filter(SV)
      );




    return (
        <div className="navigation-inner-main-div">
            {/* seacrh bar nav */}
        <div className="navigation-inner-div">
            <div className="search-div">
              <input 
              className="search-input"
              type="text"
              placeholder="Search"
              value={videoSearch}
              onChange={(e) => setvideoSearch(e.target.value)}
              onKeyDown={searchHandler}
       
              />
              <div class="search-input-btn-div"
              onClick={() => {
                dispatch({ type: "SEARCH_VIDEO", payload: videoSearch });
                setvideoSearch("");
              }}
              >
              <i class="fas fa-search"></i>
              </div>
              <button 
              className="clear-search"
              onClick={() => {
                setvideoSearch("");
                dispatch({ type: "CLEAR_SEARCH" });
              }}
              >Clear</button>
            </div>
        
        <div className="navigation-right-div">
            
          
        {isUserloggedIn ? 
          <Link to="/account" className="link-no-style">
        <div className="account-div">
          <a> <i class="fas fa-user-alt"></i> </a> 
          <span>
          {username ? `Hi,${username} `:"Login"}
          </span>
        </div> </Link> : 
        
        <Link to="/login" className="link-no-style">
        <a className="account-div">
          <a><i class="fas fa-user-alt"></i> </a> 
           <span> Login</span>
          </a>
          </Link>
          }

        </div>

        </div>

{/* author options div */}
  <div className="navigation-author-option-div">
  {authors.map((author) => (
     
          <button
            className={
              author === categoryFilter ? 
              "btn-author-active" : "btn-author"
            }
            onClick={() =>
              dispatch({ type: "FILTER_CATEGORY", payload: author })
            }
            key={author}
          >
            {author}
          </button>
          
        ))}
  </div>


        </div>
        
    )

}