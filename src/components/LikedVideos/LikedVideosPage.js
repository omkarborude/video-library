import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./likedvideos.css";
import {useAuth,useData} from "../export"
import {LikedVideosCard} from "./LikedVideoCard"


export const LikedVideosPage = () => {
    const {state} = useData();

    return (
 <div className="liked-videos-page-main-div">
        {state.likedVideos.length < 1 ? (<div><h1>No Liked Videos !</h1></div>)
        :
        
        <div className="liked-videos-page-inner-div">

            <h1>Liked Videos</h1>

            <div>
            {state.likedVideos.map((_id) => (
                <LikedVideosCard _id={_id} key={_id} />
            ))}
            </div>

        </div>}
   </div>
        )

    
}